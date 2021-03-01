# Class: 11 Event Driven Programming

## Anouncements

- Not enough help towards the end of the day.
  - Office Hours, for clarification, help disucssion about the curriculum.
    - Tuesday's from 4 - 6. Preference for where?
      - Zoom let's us all fit within the room.
      - Try Zoom this week.
    - Right after DSA on Friday or Thursday.

## Warm Up

- Let's try to create our own reduce method.

## Review

- The last 2 weeks
  - Express Framework
    - REST: Convention for GET / POST / PUT / DELETE
      - standard for resource operations, we always read on a GET, we always Create on a POST, update on a PUT, remove on a DELETE
      - endpoint should end with the name of he resource be operated on. `/resource`
      - if you select a specific one `/resource/:id`
    - HTTP: hyper text transfer protocol
      - the communication technology that facilitatets our communication between machines.
      - Functions via Requests and Responses.
  - Authentication and Authorization
    - Authentication
      - Who is a user making a request?
        - basic: String based via username and password.
        - bearer: Token based via some encoded artifact.
    - Authorization
      - Can that person access what they are requesting?
        - Role based access control.
          - Based on a users role, do they have the capabilities necessary.
  - Specific Design patterns
    - Event Driven
    - Messenger / Chat
      - Users
        - Sending a Message
        - Receiving a Message
          - Reading the Message
        - Receving Notifications
          - Reading the Notification
      - All of these features have a cause and an effect.
    - Defining an event to watch
      - Sending a message
        - Some piece needs to react.
        - Client says "message received"
          - "Notification sent"

## Event Driven Design Patterns

- Pub / Sub Design pattern
  - Something gets published
    - Something is waiting for a publication event to respond.
    - Subscribers wait for published events to take place.
      - They opt in to specific events.
      - Introduces modularity.

## Node Events Module

- Built in Event handling system.
  - Allows us to assign publishers and subscribers
