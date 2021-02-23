# Class 07: Bearer Authentication

## Code Review

- Testing Routes.
- Lifecycle hooks.
- Static methods on Mongoose Models.
- Adding data to the Express Request Object.

## Authenticating from a token

- what is the difference between basic and bearer authentication?
  - basic validates who a user is, using strings, if verfied, sends token / id_data to client / data user wants ?
  - bearer validates whoa a user id, using a token, if verified, send the data that the user wants?

- What is a JSON Web Token?
  - third party library that generates a token?
  - What does the token, contain?
    - 2 things that are important:
      - header: some meta data about the token.
      - signature / integrity verfication.
      - payload / data encoded in the token.

## Mongoose Virtuals

- Mongoose let's you create fields not specifically listed on a schema using [`.virtual` (click for documentation)](https://mongoosejs.com/docs/tutorials/virtuals.html)
- We didn't get a chance to discuss this today, feel free to look at the docs or slack me if you come across a Virtual and would like some assistance :)
