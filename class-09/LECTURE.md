# Class 09: Auth Mini Project

## Code Review

- Thanks James for the walk through of Auth!
  - Param middleware for dynamically creating model interfaces.
  - Integration tests for all model routes.
  - Middleware tests that mock express functionality.

- Auth Concept Review:
  - Authentication: Who is a user?  Do we know you?
    - Basic: Username and Password (using string)
    - Bearer: using a token of some. ( artifact that identifies, and we can validate ).
  - Authorization: System that determines 'do you have access'?  Are you able to do something ('read', 'write', 'update', 'delete')
    - Access Control List: determines CRUD access based on roles.
      - mapping of roles to capabilites.
    - jwt -> localstorage.
    - jwt -> cookie.
  - Middleware: connecting modules / files (functions).
    - express functions that runs in between other express functions.
  - What makes an express function:
    - it uses app.use (which comes from express).
    - they all need to use the parameters (request, response, next), and your using them in your function.

## Auth Project

- Use the Auth / Auth system to create a small app in a day!
- Each project should include a simple interface.

- Teams
  - Team 1
    - Nick A
    - Jason Q
    - James
    - Seid
  - Team 2
    - William
    - Carly
    - Jason D
    - Nick M
