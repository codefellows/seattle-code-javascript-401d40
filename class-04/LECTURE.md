# Class 04: Data Modeling and MongoDB

## Warm Up

- Continueing the Shredder Library with `.filter` method.

## Code Review

- Refactoring our routes to use a `express.Router`
  - Router
  - Middlewares
  - Error-handlers
  - Interfaces??

## NoSQL vs SQL

- NoSQL uses 'documents' while SQL uses table
- SQL is heavily validated
  - relataions which are defined using local and foreign keys
    - If a key is used ot relate one table to another, SQL will nott let you remove tables.
    - Won't let  you remove rows that have field related data in another table.
  - NoSQL allows fast and loose persistence
  - SQL gives you stringent rules for data protection.
    - Let's you do powerful queries, like a join.

## Modeling Data

- What data does you app need to do it's job?
  - What is a Person?
    - Name (Can this be null, is it a string)
    - Role (Can this be null, is this number)
  - From a data quality considerations, each entity to be atomic:
    - don't put too many fields on an entitiy, just data that it needs.
    - dont' use compound data structures, don't have an array / object on an enitity.

## MongoDB and mongo Shell

- Mongo Daemon, a service that starts the mongoDB software.
- Mongo Shell, command line interface for a mongo DB.

Local mongo DB:
```bash

$ mongod --dbpath path/to/db/folder

```

> starts the mongo service and puts all of he database files into a folder specificied with --dbpath

```bash

$ mongo

```

> starts the mongo shell which allows you to into terminal commands into a running instance of mongo.
