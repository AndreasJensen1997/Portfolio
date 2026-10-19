---

title: "Week 8 — Security & Hardening"
date: 2026-10-06
description: "Roles, admin-only routes and a round of fixes after looking at the API with a critical eye"
type: "changelog"
-----------------

After testing the API in week 7, I spent this week making it safer and tidier. I wanted to look at Atlas the way someone who did not build it would.

## What I worked on

- **Roles.** `Role` now implements Javalin's `RouteRole`, so an admin-only route is marked on the route itself and checked in one place. The token only holds the user id, and I read the role from the database on every request.
- **An AI rate limit.** Each user can ask Gemini for 10 prompts per hour, and the answer length is capped, so one user cannot run up the bill.
- **Long text.** Content columns are now `TEXT`, because a normal string column stops at 255 characters, which is too short for a memory.
- **Time capsules.** I removed the stored `isLocked` field and calculate the lock status from the unlock date instead.
- **Titles.** I removed the rule that page titles must be unique.

## Reflections

**Endpoint roles.** Putting `Role.ADMIN` on the route means the rule is visible next to the endpoint, and nobody has to remember to add a check in a controller. I think this is much harder to forget than an `if` statement inside each method.

**JWT role not stored in token.** If it were, a user who loses admin rights would keep them until the token expires. Reading it from the database costs one extra query per request, but a role change takes effect at once. For this project, that trade-off is worth it.

**Timecapsules locked state.** A stored `isLocked` flag can disagree with the unlock date, for example when nobody updates it. Calculating it from the date means it can never be wrong.

**A decision I changed.** I first made titles unique to avoid confusion when linking pages. But links use ids, so duplicates are not a technical problem. The confusion is about how a list looks, and the frontend can solve that by showing the page type and subtitle. Removing the check also removed the same code from nine services, which made the project simpler.

## Challenges

Nobody can make themselves an admin through the API, on purpose, so I promote my own user directly in the database. Locally the database is also recreated on every start, so I have to do it again each time.

## Next week

Concurrency in practice: a scheduled job for time capsules, a thread pool for notifications, and a WebSocket to push them live.