---
title: "Atlas"
description: "A personal time capsule for documenting and preserving your life story."

date: 2026-08-25

category: "Full Stack"
status: "In development"

technologies:
  - Java
  - JPA
  - Hibernate
  - PostgreSQL
  - React
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
**Status** -    In development             
**Type** -      Full Stack Application

## Goal

The goal of the project is to develop a production-oriented backend that demonstrates the principles and technologies
covered throughout the semester.

The backend will include:

* User authentication and validation
* Role-based access control
* Secure user-specific data
* CRUD functionality
* Business rules and data validation
* JPA and Hibernate persistence
* PostgreSQL database integration
* REST API endpoints
* DTOs for communication between the backend and frontend
* External API integrations
* A structure that can be expanded with additional functionality in the future

---

## The Idea Behind Atlas

Atlas is built around the idea of **preserving your personal story**.

Instead of treating memories as isolated diary entries, the application allows different parts of a person's life to be
connected.

For example, a memory about a trip to Italy could be connected to:

* The people who were there
* The places that were visited
* Photos and other artifacts
* Related memories
* A larger chapter of the user's life

This creates a more interconnected way of documenting life rather than simply writing individual journal entries.

---

## Architecture

The project is divided into two main parts:

### Backend

The backend is being developed in **Java** and provides the API and business logic for Atlas.

The current backend stack includes:

* Java
* JPA
* Hibernate
* PostgreSQL

The backend is responsible for handling persistence, relationships between entities, validation, authentication, and
communication with the frontend.

### Frontend

The frontend is being developed with **React**.

It will provide the visual interface through which users can create, view, edit, and organize their personal content.

The frontend will communicate with the Java backend through the REST API.

---

## Core Concepts

Atlas is built around several central concepts:

**Chapters**
Larger periods or phases of a person's life.

**Memories**
Individual moments or experiences that the user wants to preserve.

**People**
People who are connected to memories, chapters, or other parts of the user's story.

**Places**
Locations that have significance to the user's life.

**Artifacts**
Objects or pieces of media that carry personal meaning, such as albums, films, or other meaningful objects.

**Entity Lists**
Custom collections that allow users to organize related items, such as favourite movies, quotes, books, or memories.

---

## Development

Atlas is currently **in development as part of my 3rd-semester Datamatiker project at EK**.

The project is being developed incrementally, beginning with the backend architecture, database model, and persistence
layer before connecting the API to the React frontend.

The long-term goal is to create a polished full-stack application that demonstrates both the technical concepts learned
during the semester and a practical, user-focused product.

---

## Technologies

### Backend

* Java
* JPA
* Hibernate
* PostgreSQL

### Frontend

* React
* JavaScript
* HTML
* CSS

### Development

* IntelliJ IDEA
* pgAdmin
* Git / GitHub

