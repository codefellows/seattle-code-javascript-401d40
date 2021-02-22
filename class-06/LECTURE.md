# Class 06

## Feedback

- Overall things are going well.
- Lecture goes fast sometimes.
- More class engagment.
  - Moment that we resume from break,
    - review what was covered / retained from the previous hour.
- Feeling a little lost amongst all of this material.

## Annoucements

- Instructor
  - Fill out the Instructor Sync: First Half assignment.

## Warm Up

- Arithmatic Express Server
  - See warmup Code.

## Authentication

- Who is making this request?
  - Who are you and if I know you, than we are good to go.
  - Is this okay ( this is more Authorization )?
- Why would we want know this?
  - Resources are created by a User, and we want to give them resources.
  - We don't want to give people the wrong clothes.
- How do we solve this?
  - password (string based)
    - A user creates a password that only they know?
    - Reducing a individial to a string is really prone to authentication issues.
    - Multi-factor authentication is much better.
      - User also gets an email.
      - Fingerprints.
      - Retina / face recoginition.
- Basic Authentication
  - User assigns themselves a string of characters.
  - We are going to go through a process to take those strings and (encode / encrypt).
    - Encyptions algorithms (third party library).
    - Encoding our strings via base64.
      - Encoding is attempting to make an input more accessible to a machine.
      - Encryption is attempting to hide information / data.
        - If anyone where to get ahold of an ecrypted they would have no way of decrypting it (unless we provide them a key).
          - Process known as hashing.

- Review
  - What does Authentication mean?
    - Nick A: The User access to certain things
      - Authorization's job is does someone have access.
      - Who is this person.
  - What is Basic Authentication?
    - (string) based password.
    - tomorrow we discuss Bearer.
  - What is Encoding?
    - base64, makes the computer life easier.
  - What is Encryption?
    - Hiding data that the user gives.
    - Make difficult to make sense of.



## Mongoose Model Methods

## Building an Authentication System.
