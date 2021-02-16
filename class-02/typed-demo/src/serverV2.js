'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./middlewares/handle-errors.js');

//  If you ever need JSON data attached to the 'request' object, remember to use the express.json middleware.
app.use(express.json());

const people = {
  db: {
    "Jacob":  {
      name: 'Jacob',
      role: 'instructor',
    }
  }
}

// query a person
app.get('/', searchPersonHandler);

app.post('/person', newPersonHandler);

app.delete('/person/:name', deletePersonHandler);

app.use(errorHandler);


// Search our people database using a name on the request, using a 'name' queryString
function searchPersonHandler(request, response, next) {

  const nameToSearch = request.query.name;

  if (!nameToSearch) {
    response.send(people.db)
  }

  const person = people.db[nameToSearch];

  if (!person) {
    next('No person found');
  }

  response.json(person);
}

// insert a new person into people.db
function newPersonHandler(request, response, next) {

  // json object from the client
  const person = request.body;

  if (!person.name || !person.role) {
    next('no person found on request');
  } else {
    people.db[person.name] = person;
  }

  response.json(person);
}

function deletePersonHandler(request, response, next) {

  const person = request.params.name;

  if(!person) {
    next('Bad Request');
  } else if (!people.db[person]) {
    next('No person found');
  } else {
    delete people.db[person];
  }

  response.status(204).end();
}


module.exports = {
  'app': app,
  'start': function (port) {
    app.listen(port, () => {
      console.log('App is up on PORT :: ' + port);
    });
  }
}
