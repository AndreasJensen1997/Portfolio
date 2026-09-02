---
title: "Week 1 — Getting Started"
date: 2026-08-25
description: "Setting up the Atlas project and defining the initial architecture."
type: "changelog"
---

This week I started working on Atlas.

The main goal was to establish the basic architecture of the application and create a solid foundation for the development process.

## What I learned

### JPA

I gained a better understanding of how JPA entities relate to each other and how these relationships can be mapped in Java.

I also started learning how annotations such as `@OneToMany`, `@OneToOne`, and `@ManyToOne` can be used to define relationships between entities.

### Annotations & Lombok

I learned more about Java annotations and how they can be used to provide additional information to the application.

I also worked with Lombok and learned how it can reduce boilerplate code by automatically generating things such as getters, setters, constructors, and other commonly used methods.
## How I implemented it. 

- Created the initial project structure with the use of a domain model. 
- Started designing the database. I did so by designing an ER diagram, to have a better visual understanding of the system architecture
- Worked with JPA and Hibernate
- Created the first entities and added relations between the classes
- Reduced boilerplate code in entity classes with the use of lombok to make getters, setters, constructors and more. 



## Next week

Next week we will be introduced to data intergration and how to implement the use of api's in java.
I will also be working on finishing setting up my DAO classes and create test to make sure they correctly can communicate wit the database. 