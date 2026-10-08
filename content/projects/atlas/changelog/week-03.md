---

title: "Week 3 — Testing the DAO Layer"
date: 2026-09-08
description: "Testing the DAO layer and creating reusable test data for the Atlas backend."
type: "changelog"
-----------------

This week I continued working on *Atlas*, with a focus on testing the DAO layer.

After creating the basic DAO structure, I wanted to make sure that my database operations worked as expected. I created individual test classes for my DAOs and developed a reusable `TestPopulator` to provide consistent test data.

I also added custom DAO methods for entities that required functionality beyond the basic CRUD operations provided by my generic DAO.

## What I worked on

### DAO Testing

I created a separate test class for each DAO so that I could test the functionality of each entity independently.

The tests cover operations such as creating, finding, updating, and deleting entities, as well as custom methods specific to individual DAOs.

This allowed me to test my persistence layer before moving further into the API.

### Test Populator

One of the first things I needed was a reliable way of creating test data.

I created a `TestPopulator` class that persists several instances of each entity into the test database. I considered creating multiple smaller populators, but decided to keep one central populator because many of my entities depend on each other.

For example, a `Memory` can depend on a `Person`, `Place`, `Chapter`, or `AppUser`. Having all of the related entities created in one place makes it easier to construct valid test data.

After populating the database, the populator returns a `SeededData` record containing the persisted entities:

```java
return new SeededData(
        user1, user2, user3,
        chapter1, chapter2, chapter3,
        artifact1, artifact2, artifact3, artifact4,
        musicType, objectType, vehicleType,
        fragment1, fragment2, fragment3,
        entityList1,
        memory1, memory2, memory3,
        person1, person2, person3,
        place1, place2, place3,
        story1, story2, story3,
        timeCapsule1, timeCapsule2, timeCapsule3,
        mention1, mention2, mention3
);
```

Each test class can then use this data during its setup:

```java
@BeforeEach
void setUp() {
    seeded = TestPopulator.populate(emf);
    artifactDAO = new ArtifactDAO(emf);
}
```

This gives each test a predictable starting point and avoids having to manually create the same test data in every test class.

### Generic DAO & Custom Methods

As mentioned in my previous blog post, I moved the basic CRUD operations into an abstract generic DAO class.

The individual DAOs can extend this class and reuse the common functionality instead of implementing the same methods for every entity.

However, I kept the tests as separate classes rather than creating one generic DAO test.

The reason for this is that some of my entities have their own lifecycle methods and additional logic that needs to be tested when entities are created or updated. Because of this, the tests cannot always rely on the exact same behaviour.

For entities with additional functionality, I can therefore add tests specifically for that behaviour.

---

## What I learned

### Testing the Persistence Layer

This week gave me a better understanding of why testing the DAO layer is important.

Rather than only checking whether the application works when everything is connected together, I can test the database operations independently.

This makes it easier to identify where a problem occurs. If a test for a DAO fails, I can investigate the persistence logic without having to involve the API or frontend.

### Creating Reusable Test Data

I also learned the importance of having a consistent way of creating test data.

Because many of my entities are connected through JPA relationships, creating test data manually inside every test would quickly become repetitive and difficult to maintain.

The `TestPopulator` gives me one central place where I can define the relationships between my test entities.

### Testing Entity-Specific Behaviour

Another thing I learned was that not every DAO can necessarily be treated exactly the same way.

While the generic DAO handles the common CRUD functionality, individual entities can have their own business logic and lifecycle methods.

This means my tests need to cover both the shared DAO functionality and the behaviour that is specific to each entity.

---

## Challenges & Problems

The biggest challenge this week was understanding the dependencies between my entities and creating the correct data needed to test them.

Because many entities have relationships with other entities, I could not simply create one entity in isolation.

For example, when testing an entity that requires an `AppUser` or another related entity, that related entity needs to exist and be persisted first.

This made the order in which the test data is created important.

It also made me realise that the structure of my test data needs to reflect the same relationships that exist in the actual application.

---

## Next week

Next week I want to continue working towards the **Atlas API**.

My main focus will be on learning how to expose the functionality I have built through API endpoints and understanding how the different layers of my backend should communicate with each other.
