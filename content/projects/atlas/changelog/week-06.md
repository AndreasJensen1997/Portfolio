---

title: "Week 6 — Rest API"
date: 2026-09-28
description: "Building the REST layer: JWT, a generic controller and one resource after another."
type: "changelog"
-----------------

This was the most productive week so far. The API went from one working resource to almost all of them.

## What I worked on

- **JWT.** A generator and a verifier, so every request except login and registration needs a token.
- **`EndpointGroup`.** Each controller registers its own routes, instead of `main` knowing every path.
- **A full flow for chapters:** DTOs, mapper, service and controller, tested with HTTP files.
- **`AbstractController`.** One generic controller with create, get by id, list, update, delete and random. After chapters, memories, stories, artifacts, people, places, fragments, time capsules and lists each needed little more than DTOs, a mapper, a service and a small subclass.
- **Dependency injection** in `ApplicationConfig`, which grew with every resource.

## Reflections

**The signal to abstract.** I only wrote the generic controller after I had written the chapter flow by hand and could see which parts repeated. Doing it earlier would have been guessing. The result is that adding a new resource is now fast and consistent.

**An abstraction has a cost.** Not everything fits. Authentication, users and mentions do different things, so they do not extend `AbstractController`. I decided it is better to let a few controllers stand alone than to bend the base class until it fits everything.

**The user id comes from the token, never from the request.** A client should not be able to say "I am user 5". The token proves who they are, and the service uses that id for every query. That decision is what makes it possible to keep every user's data private.

**Small bugs showed the value of interfaces.** The mappers for people and places had a mistake that I found only because I made them implement a shared `IMapper` interface. The interface forced the same signature everywhere.

## Challenges

`ApplicationConfig` is getting long. Every new resource needs its own block of DAO, mapper, service and controller. It works and it is easy to follow, but I can see it becoming hard to read if it keeps growing.

## Next week

Test every endpoint properly with REST Assured instead of clicking through HTTP files, and describe the behaviour in Gherkin.