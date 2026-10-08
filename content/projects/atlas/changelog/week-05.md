---

title: "Week 5 — Concurrency"
date: 2026-09-21
description: "Thoughts about where to implement concurrency"
type: "changelog"
-----------------

This week the main focus of school was integration of an api in a java project. More specifically, requesting a prompt from google gemini and extracting the data from the prompt. 
Because I already had a feature planned where a user could generate a prompt, containing an idea of something to write about i thought about how i could implement this in atlas.


## What I worked on



### Integrating gemini API
When i first thought of the "prompt generator" feature, my plan was to have a list of short hard coded prompts in the database, a user could get at random. After learning how to use the gemini API in school, i decided to intergrate that in the feature. 
So instead of a list of prompts typed manually in the database, I could instead utilize gemini to create unique prompts every time a user asks for one. 

This decision automates the feature in atlas, and in concept, would never need to be "updated" by adding new prompts once the user had seen them all, making it fully dynamic.
I used the project we made together in school, and when i could sucessully extract a prompt, i made the proper mapper, DTO and DAO classes in order to show the prompt, and for the user to save a prompt they like.  

### Privacy
A big part of atlas is privacy. I want to ensure that a user can choose whether or not they want their created page to be private or public. Therefore i added an enum to my project called visibility. It contains "PUBLIC" and "PRIVATE". 
The reason i choose an enum over a boolean, is that i originally wanted the user to between private, public or a custom setting. The idea with the custom setting was that the user could pick from a list of friends, who they wanted a page to be public with. I quickly decided though, that it was a bit out of scope, and i wanted to focus on basic privacy functionality first. 
If i decide to add it in the future, the enum makes it easy to add a variant of visibility, which i would not be able to, if i had chosen to use a boolean.


### Generic DAO & Custom Methods



## What I learned

### Testing the Persistence Layer

### Creating Reusable Test Data

### Testing Entity-Specific Behaviour


## Challenges & Problems


---

## Next week

