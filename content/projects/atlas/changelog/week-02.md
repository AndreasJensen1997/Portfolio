---
title: "Week 2 — Database & Relations"
date: 2026-09-01
description: "Working on the database structure and beginning the API."
type: "changelog"
---


This week I continued working on *Atlas*. I focused on the database structure, JPA relationships, and the first steps towards building the API.

I also spent time analysing the entity layer I had created previously and used it as the foundation for developing my DAOs.

## What I worked on

### Database & DAOs

I started working on the database layer of Atlas by looking at how my entities should interact with the database.

Based on the entity structure, I began developing **DAOs (Data Access Objects)** for handling database operations.

This helped me understand how the entity layer, JPA, Hibernate, and the database work together.

I also started working with relationships between entities using JPA annotations such as:

* `@OneToMany`
* `@OneToOne`
* `@ManyToOne`

These relationships allow the different parts of Atlas to be connected in the database.

### Generics
In order to avoid having the same crud methods written in each DAO class, i created an abstract DAO class the extends my IDAO. Thern each DAO can extend the generic DAO in order to inherit all basic  crud methods.
This makes my dao classes clean as they only need their custom dao methods in the body. 

i also made a generic entity "LinkableEntity". This was a choice i took especially because of my entityList entity. Which is a feature that allows the user to make a custom list with any entity in the program that can be linked to each other.
With a generic entity, the process becomes much smoother.

### Annotations & Lombok

I learned more about Java annotations and how they can provide additional information to the application and influence how entities are handled by JPA and Hibernate.

I also worked with **Lombok**, which helped reduce the amount of boilerplate code in my entity classes.

Instead of manually writing getters, setters, constructors, and other common methods, Lombok can generate them automatically using annotations.

This made my entity classes considerably shorter and easier to maintain.

### Entity Lifecycle Methods

While working on my entities, I came across two annotations that I found particularly useful: `@PrePersist` and `@PreUpdate`.

`@PrePersist` allows a method to run automatically before an entity is persisted to the database.

I used it to set default values for fields such as `createdAt`:

```java
@PrePersist
public void setDefaultDate() {
    if (this.createdAt == null) {
        this.createdAt = LocalDate.now();
    }
}
```

This means I don't have to manually set the creation date every time I create a new entity.

I also worked with `@PreUpdate`, which runs automatically before an existing entity is updated.

In my entities, I used it to update the `updatedAt` field and recalculate values such as the word count:

```java
@PreUpdate
protected void onUpdate() {
    updatedAt = LocalDate.now();
    calculateWordCount();
}
```

This allows certain values to be updated automatically whenever the entity changes.

---

## What I learned

### JPA Relationships

I gained a much better understanding of how entities communicate with each other through **JPA relationships**.

Previously, I mainly understood entities as individual classes representing database tables. Working with relationships helped me understand how these entities can instead be connected and how those connections are represented in Java.

I learned how annotations such as `@OneToMany`, `@OneToOne`, and `@ManyToOne` can be used to define these relationships.

For example, a user can have multiple memories, while each memory belongs to a specific user.

### DAOs

I also gained a better understanding of the purpose of DAOs.

Rather than having database operations directly inside my entities or other parts of the application, the DAO provides a separate place for handling persistence-related operations.

This gave me a clearer idea of how the different layers of my backend can be separated.

### Entity Lifecycle

Working with `@PrePersist` and `@PreUpdate` also helped me understand that JPA provides ways to react to different stages of an entity's lifecycle.

This can be useful for automatically handling values such as creation dates, update dates, calculated fields, and other values that should be maintained by the application.

---

## Challenges & Problems

One of the things I had to get used to this week was understanding how the different parts of the backend fit together.

The entity classes, JPA relationships, DAOs, Hibernate, and database are all connected, but each has a different responsibility.

Working through this helped me understand that the backend is not just about creating entities, but about creating a structure where the different layers work together.

---

## Next week

Next week I want to continue building the **Atlas API**.

My main focus will be on understanding how to expose my backend functionality through API endpoints and continue developing the structure that will eventually allow the React frontend to communicate with the Java backend.
