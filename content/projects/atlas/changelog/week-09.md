---
title: "Week 9 — Concurrency & WebSockets"
date: 2026-10-20
description: "Background jobs, a thread pool and live notifications, and what went wrong on the way."
type: "changelog"
---

In week 5 I wrote down where Atlas might need concurrency. This week I built it, and each part solves one of those problems.

## What I worked on

- **Devlogs as a changelog.** Admins write them and everyone reads them. Creating a devlog sends a notification to every user from a thread pool, so the admin gets an answer at once.
- **A job for time capsules.** One scheduled thread checks every minute for capsules that have opened, and sends one notification for each.
- **A WebSocket.** A `ConnectionRegistry` keeps track of the open connections, and new notifications are pushed to the user the moment they are created.
- **Tests** for the rate limiter, the job and the WebSocket.

## Reflections

**Concurrency problems live in shared state.** My rate limiter from last week keeps a list of timestamps per user. A thread-safe map is not enough, because "count the requests" and "add this one" are two steps. Two threads can both see 9 of 10 and both get in. A lock around both steps fixes it. The same thinking applies to the WebSocket connections: Jetty does not allow two threads to write to the same connection at once.

**Timecapsule notifications.** For time capsules I save the notification first and mark the capsule as notified afterwards. If the server stops in between, the worst case is a duplicate. The other order could lose a message, which seemed worse.

**WebSockets skip my security filter.** The filter only covers HTTP routes, so the token has to be checked when the connection opens. Browsers cannot set an `Authorization` header on a WebSocket, so the token goes in the URL. That works, but it can end up in logs. In a bigger project I would send it as the first message instead.

**Green tests can hide errors.** After the WebSocket tests passed, I saw a database error in the log. A background thread was still writing notifications when the next test cleared the database. The fix was to make the test wait for the background work to finish. It taught me to read the log even when the tests are green.

## Challenges

The WebSocket closed after about 30 seconds because it was idle. The server now pings every 20 seconds, which keeps it open.

## Next week

I will focus on understanding the project and preparing for the exam. After that, I want to clean up the exception handling and split the configuration class, which has taken on too many jobs.
