---
title: "Week 10 — Wrap Up"
date: 2026-10-27
description: "Deploying Atlas, writing the documentation and preparing for the exam."
type: "changelog"
---

The features were finished last week. This week was about getting Atlas out of my laptop, documenting it, and making sure I can explain every part of it.

## What I worked on

- **Deployment.** Atlas now runs on a server. GitHub Actions builds and tests the project and pushes a Docker image to Docker Hub. On the server, Docker Compose runs the database, Atlas, Caddy for HTTPS and Watchtower, which pulls a new image when there is one.
- **Documentation.** I updated the README with the most important user stories and the deployment setup. The user stories and a class diagram now live in their own files, and the README links to them.
- **Exam preparation.** I wrote an outline for the presentation, went through user story 4 (creating a mention) from the first request to the database, and tested myself with questions until I could explain the difficult parts in my own words.

## Reflections

**Deployment and configuration problems** Almost nothing I fixed was a bug in the code. A secret had the wrong name, the compiler did not find Lombok on the newest Java version, and an old version of Docker Compose could not recreate a container. Each time the answer was in a log, so I learned to read the log before guessing.

**Reflecting.** Mentions have no foreign keys, so the service has to check that the pages exist. Notifications are saved before they are sent, so a message can arrive twice but never get lost. Every design choice in Atlas had a cost, and knowing the cost is what makes it a choice and not a guess.

## Challenges

Keeping the documentation true. The project changed a lot, so diagrams and texts from the early weeks no longer matched. I had to go through them and decide what to update and what to keep as a record of how the project grew.

## What is next

The exam. After that I want to clean up the exception handling, split the configuration class and add the things I left out on purpose, such as search, pagination and a frontend.