# Warm Up - Express Part 2

## Setup

Clone the [starter code](https://github.com/JacobKnaack/express-warmup) from yesterday and work in a branch called `part-2`.  

Today you will take the server code completed during yesterday's warm-up and add a database module, and modify the router to include RESTful route handling.

## Requirements

### Database CRUD

Create a module called `mongo.collection.js` that uses mongoose to connect to a mongo database and perform the following CRUD operations on `records`.  This module should export an ES6 class that encapsulates a `mongoose.model` and includes methods that can perform each of the following operations on a mongoose NoSQL database:

* `create` : Takes data for a record and creates a new `record`. Returns that resulting record.
* `read` : Takes an optional id and searches the mongo document for a record with a matching Id.  If no id is provided, query all of the records in the DB, resulting query should be returned.
* `update`: Takes an `id` and a `record` and searches the mongo document for a match and replaces the match with the new `record` data.
* `delete`: Takes an `id` and removes the mongo document with the matching `_id`.
* Your  a simple schema that has a `name` and a `date` property.

### Restful Routes

Refactor the routes to include full CRUD behaviors.  Import the `mongo.collection` module and use the appropriate CRUD method to perform create, read, update, and delete operations.

* `GET` on `/` should use the `read` method on the mongo module to find a record using the `request` body.  return the result as `JSON`.
* `POST` on `/` should use the `create` method on the mongo module to create a new record using the `request` bodyy and return the result.
* `PUT` on `/` should use the `update` method on the mongo module to update a record using an `id` parameter on the `request` and the `request` body.  Return the updated record in the `response`.
* `DELETE` on `/` should use the `delete` method on the mongo module to remove a record.  The response body should be empty and a 204 http status should be returned.
