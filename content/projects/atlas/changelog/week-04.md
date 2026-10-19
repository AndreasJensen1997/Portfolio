---

title: "Week 4 — API endpoints & privacy"
date: 2026-09-15
description: "Getting the first endpoints running with Javalin, thinking about privacy, and calling an external API."
type: "changelog"
-----------------

This week the main focus of school was integration of an api in a java project. More specifically, requesting a prompt from google gemini and extracting the data from the prompt. 
Because I already had a feature planned where a user could generate a prompt, containing an idea of something to write about i thought about how i could implement this in atlas.


## What I worked 

- **Javalin and the first endpoints**, tested with Postman. I also made my first mapper, DTO and service (for the user).
- **Validation for registration and login**, and a `getUserByEmail` method in the DAO.
- **Roles.** I added a `Role` enum (`USER`, `ADMIN`) and a role field on the user.
- **Visibility.** I added a `Visibility` enum so that each page can later be private or public.
- **Gemini.** I added Jackson and made my first call to the Google Gemini API with Java's `HttpClient`, and parsed the answer into a small DTO.



## Reflections

### Integrating gemini API
When i first thought of the "prompt generator" feature, my plan was to have a list of short hard coded prompts in the database, a user could get at random. After learning how to use the gemini API in school, i decided to intergrate that in the feature.
So instead of a list of prompts typed manually in the database, I could instead utilize gemini to create unique prompts every time a user asks for one.

This decision automates the feature in atlas, and in concept, would never need to be "updated" by adding new prompts once the user had seen them all, making it fully dynamic.
I used the project we made together in school, and when i could sucessully extract a prompt, i made the proper mapper, DTO and DAO classes in order to show the prompt, and for the user to save a prompt they like.

### Privacy
A big part of atlas is privacy. I want to ensure that a user can choose whether or not they want their created page to be private or public. Therefore i added an enum to my project called visibility. It contains "PUBLIC" and "PRIVATE".
The reason i choose an enum over a boolean, is that i originally wanted the user to between private, public or a custom setting. The idea with the custom setting was that the user could pick from a list of friends, who they wanted a page to be public with. I quickly decided though, that it was a bit out of scope, and i wanted to focus on basic privacy functionality first.
If i decide to add it in the future, the enum makes it easy to add a variant of visibility, which i would not be able to, if i had chosen to use a boolean.

I also decided that the default is that everything is private when the user creates pages. Every page belongs to exactly one user, and that every query later has to be filtered on that user. It is easier to build this in from the start than to add it afterwards.


**Storing `Visibility` before I use it.** Sharing is not built yet, so the field is not used for anything. I kept it anyway, because adding a column to existing data later is more work than leaving a field unused for a while. I could also have left it out until I needed it. I chose the safer option.

**Why DTOs?** It would have been quicker to return the entity directly. But then the password hash would be part of the response, and clients could set any field they liked. DTOs let me decide exactly what goes in and out.
### Testing Entity-Specific Behaviour


## Challenges

Parsing the answer from Gemini was fiddly. The response has several nested objects, and my first attempt broke when the API added fields I did not know about. Telling Jackson to ignore unknown properties solved it.

---

## Next week

Logging, a proper controller structure, and token-based login.

