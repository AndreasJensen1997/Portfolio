---
title: "Week 1 — Getting Started"
date: 2026-08-25
description: "Setting up the Atlas project and defining the initial architecture."
type: "changelog"
---

This week I started _Atlas_: a personal, private encyclopedia of your own life. You write pages (memories, chapters, stories, people, places, objects), highlight text in a page and link it to another page, and every page can then show what links to it.

The main goal was to establish the basic architecture of the application and create a solid foundation for the development process.

## What I worked on

I set up the project from the template and removed the classes I did not need. The first student-style DAO became a `UserDAO`, and I created the first entities (`AppUser` and `Chapter`) and registered them in an `EntityRegistry`.

I also wrote my first DAO through an `IDAO` interface with basic CRUD, and tried it out directly in `main` before building anything around it.



### Domain model

Below is a simplified class diagram of the domain model. My domain model was sketched by hand, which is why i dont have a good overview of that. But based on the domain model, i made this class diagram that represent the entire project truly. 

![Class diagram](img/class-diagram.png)

## Reflections

**Why start with entities and a DAO?** Everything else in the project depends on the data model. If a relationship is wrong here, it is wrong in the API, the tests and the frontend too. Starting at the bottom felt slow, but I think it was cheaper than fixing the structure later.




## How I implemented it. 

- Created the initial project structure with the use of a domain model. 
- Started designing the database. I did so by designing an ER diagram, to have a better visual understanding of the system architecture
- Worked with JPA and Hibernate
- Created the first entities and added relations between the classes

## Noticeable changes 

- Changed the datatype from "int" to "Integer" on my entities id attribute, in order for the "equals" and "hash" methods to be compatible with the id. 




## Next week

Next week we will be introduced to data intergration and how to implement the use of api's in java.
I will also be working on finishing setting up my DAO classes and create test to make sure they correctly can communicate wit the database.



Create all the entities, connect them with JPA relationships, and start on a generic DAO so I do not write the same CRUD code over and over.
