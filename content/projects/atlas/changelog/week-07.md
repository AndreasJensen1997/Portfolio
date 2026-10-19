---

title: "Week 7 — Rest assured"
date: 2026-10-05
description: "Testing all endpoints with REST Assured, describing behaviour in Gherkin, and what the tests revealed about security."
type: "changelog"
-----------------

This week was about testing the API end to end, and the tests found more than I expected.

## What I worked on

- **REST Assured tests for every controller.** Each test class starts the real Javalin server and sends real HTTP requests to a PostgreSQL database in a Testcontainers Docker container. A `TestPopulator` seeds the data and a cleanup method resets it between tests.
- **Gherkin.** I wrote a feature file with scenarios in the form *Given a valid token, when I send POST /chapters, then I get 201.*
- **Notifications and devlogs**, built as a complete flow with tests.
- **Mentions and ownership.** I connected each mention to its user and added checks so users cannot read other users' mentions.
- **Configuration.** I moved the JWT secret into `config.properties`, and made the database reset on start only when the app is not deployed.

## Reflections

**Tests as a design tool.** While writing the mention tests I asked what happens if I link to a page that belongs to someone else. The answer was that it worked, which meant a user could attach links to other people's pages. That is a security hole, not a small bug. The fix was to check in the service that both pages exist and belong to the logged-in user.

**404 instead of 403.** When a user asks for another user's page, I answer `404 Not Found`. A `403 Forbidden` would confirm that the page exists. Hiding that is a small privacy gain for no extra code.

**Gherkin versus REST Assured.** Gherkin describes behaviour in plain language, and REST Assured checks it in code. I did not set up Cucumber, so my feature file is a specification, and each scenario matches one REST Assured test. For a project this size that was enough, and it kept the tests close to what the API promises.

**A secret in the source code.** I had written the JWT secret directly in the code, and I noticed it only when I looked at the project the way someone else would. Secrets belong in configuration that is not committed.

## Challenges

All the endpoint tests share one database and one port, so they have to clean up after themselves, or a failing test can break the next one. Getting the setup and cleanup right took more time than writing the tests.

## Next week

Roles and admin-only routes, and hardening what the tests showed me.