---
title: "Atlas"
description: "A personal time capsule for documenting and preserving your life story."

date: 2026-08-25

category: "Full Stack"
status: "In development"


---

## Project Overview

**Atlas** is a personal journal application designed to help users document, organize, and preserve the important parts
of their lives.

The idea is to create a private, personal space where memories, people, places, stories, and meaningful objects can be
collected and connected — almost like a personal Wikipedia for your own life.

The project is being developed as a full-stack application, with a **Java backend API** serving as the foundation and a
**React frontend** providing the user interface.

---

## Project Information

**Developer** -  Andreas Jensen             
**Education** -  Datamatiker — 3rd semester
**School** -    EK                         
**Year** -      2026                       
**Status** -    In development (backend v1 complete)
**Type** -      Full Stack Application

---

## Goal

The goal of the project is to develop a production-oriented backend that demonstrates the principles and technologies
covered throughout the semester.

The backend includes:

* User authentication with JWT, and role-based access control (`USER` and `ADMIN`)
* Secure, user-specific data, where one user can never read another user's pages
* CRUD functionality, business rules and data validation
* JPA and Hibernate persistence with PostgreSQL
* A REST API with DTOs for communication between the backend and frontend
* Concurrency: a scheduled job, a thread pool and thread-safe shared state
* Real-time notifications over a WebSocket
* An external API integration (Google Gemini)
* Automated tests of the database layer and of every endpoint
* A structure that can be expanded with additional functionality in the future

---
Atlas is built around the idea of **preserving your personal story**.

Instead of treating memories as isolated diary entries, the application allows different parts of a person's life to be
connected.

For example, a memory about a trip to Italy could be connected to:

* The people who were there
* The places that were visited
* Objects that carry meaning
* Related memories
* A larger chapter of the user's life

The user highlights a piece of text, links it to another page, and every page can then show everything that links *to*
it. This creates a more interconnected way of documenting life rather than simply writing individual journal entries.

---

## Core Concepts

Atlas is built around several central concepts:

**Chapters and Stories**
Larger periods or narratives in a person's life.

**Memories**
Individual moments or experiences that the user wants to preserve.

**People and Places**
The people and the locations that matter to the user's story.

**Artifacts**
Objects that carry personal meaning, such as albums, films, or clothing. Each user creates their own categories.

**Entity Lists and Fragments**
Custom collections (favourite films, books, quotes) and short notes that do not need a full page.

**Mentions**
Links from a highlighted piece of text in one page to another page. They make it possible to see which pages link
*to* a given person, place or memory (backlinks).

**Time Capsules**
Messages that stay sealed until a date in the future. When the date arrives, the owner is notified.

**Notifications and Devlog**
Admins publish announcements (a changelog), and every user receives a notification. Notifications are saved in the
database and pushed live to anyone who is connected.

**AI journaling prompts**
Writing prompts generated with Google Gemini, with a limit on how many a user can request.

---
## Architecture

The project is divided into two main parts:

### Backend

The backend is developed in **Java** with **Javalin** and provides the API and business logic for Atlas.

A request passes through clear layers:

```
Client -> SecurityFilter (JWT, role) -> Controller -> Service -> DAO -> PostgreSQL
```

* **Controllers** validate the request and choose the status code.
* **Services** hold the rules, such as ownership checks.
* **DAOs** handle persistence with JPA and Hibernate. A generic DAO and a generic controller remove repeated CRUD code.
* **DTOs and mappers** keep the database entities out of the API.
* **Dependencies** are wired by hand in one place, using constructor injection.

Alongside the request flow, some work runs in the background:

* a scheduled thread checks time capsules and keeps WebSocket connections alive
* a thread pool creates devlog notifications for every user
* a registry of open WebSocket connections delivers notifications live

### Frontend

The frontend is being developed with **React**.

It will provide the visual interface through which users can create, view, edit, and organize their personal content.

The frontend communicates with the Java backend through the REST API and a WebSocket for live notifications.

---
## Development

Atlas is developed as part of my **3rd-semester Datamatiker project at EK**.

The project has been built incrementally: the data model and persistence layer first, then the REST API, security and
tests, and finally concurrency and real-time notifications. I write a weekly log about the choices and trade-offs along
the way.

The first version of the backend is complete. Features I want to build next include images on pages, search across all
pages, a timeline, and friends with shared pages.

The long-term goal is to create a polished full-stack application that demonstrates both the technical concepts learned
during the semester and a practical, user-focused product.

---

## Technologies

### Backend

* Java
* Javalin (HTTP and WebSockets)
* JPA and Hibernate
* PostgreSQL
* JWT and BCrypt
* Jackson

### Testing

* JUnit and Hamcrest
* REST Assured
* Testcontainers (a real PostgreSQL in Docker)

### Frontend (To be made)

* React
* JavaScript
* HTML
* CSS

### Development

* IntelliJ IDEA
* pgAdmin
* Docker
* Git / GitHub
* Figma (diagrams)