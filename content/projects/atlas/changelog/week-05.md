---

title: "Week 5 — Concurrency"
date: 2026-09-21
description: "Thinking about where concurrency actually belongs in Atlas, while finishing the first full request flow."
-----------------

This week's topic was concurrency. Instead of adding threads to the project just to say I had used them, I wanted to find out where Atlas really needs them.

## What I worked on

- **Logging.** I added SLF4J and Logback and replaced my print statements with proper log messages.
- **The first complete flow.** For the user, JSON now arrives in the controller, gets validated in the service and is saved by the DAOs.
- **Authentication controller.** I split login and registration out of the user controller into a controller of their own.
- **Gemini prompts.** I built the flow for generating, saving and deleting AI prompts.
- **A rename.** `AppUser` became `User`, with the table named `users`, because `user` is a reserved word in PostgreSQL.

## Reflections on concurrency

I tried to answer two questions: *where does Atlas already run on several threads*, and *where would a background thread solve a real problem?*

- Javalin runs on Jetty, which handles each request on its own thread. So any state shared between requests (a counter, a cache, a list of open connections) has to be thread safe. It is easy to forget, because nothing breaks until two requests arrive at once.
- My call to Gemini is a slow network call, and it blocks the request thread while it waits.
- Time capsules open on a date. Something has to notice that date, and it is not a request.
- A new announcement could notify every user, but nobody should wait for that.

My conclusion was to wait. The API was not finished, and concurrency added to an unfinished system would just be noise. I wrote down the candidates: a rate limiter for the AI calls, a scheduled job for time capsules, a thread pool for notifications and, maybe, a WebSocket.

*Looking back:* those four were exactly what I ended up building later in the project, and each one solved a problem I had already described here.

## Challenges

The reserved word `user` caused a confusing database error before I understood what was wrong.

## Next week

Token-based login (JWT) and a generic controller so I do not repeat the same code for every resource.

---

## Next week

