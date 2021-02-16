# Class 02: Express

## Whiteboarding

- Code Challenges: prepare for the whiteboarding final.

## Review

- CI / CD 
  - Continuous Integration?
    - Github Actions
    - Adding workflows which take the shape of a yml.
  - Continuous Deployment?
    - Github first step to continous deployment.
    - Heroku is the service that is wathcing github.
      - Any push to the main branch re-deploys our application.
    - Spins up a cloud computer and runs our application.
- Node Modules
  - `require` function
    - importing dependencies.
    - whatever the `module.exports` object is assigned to.
  - `module.exports`
    - export a dependency to another module / file.

## Express At a high Level

## Routing / Middleware

- Express routes will handle request first come first server:
  - From top to bottom in a file that defines routes.  The first route handler that can catch and perfrom route handling logic, will do so.   If no route is ablet  tobe used, this is where error handler come into play.
- Middleware is any functionality that sits inbetween the request and the response ( but does not send out the reponse itselft )
  - Should always finish with an executing of the `next` function.
  - Should still use the (request, response, next) parameters.
