'use strict';


//For every resourse that we have we can define a router, using RESTful route definitions
const express = require('express');
const router = express.Router();

const validator = require('../middlewares/validator');

const PersonInterface = require('../models/person.js');
const person = new PersonInterface();

router.get('/person', getPeople);
router.get('/person/:id', validator, getPersonById);
router.post('/person', createPerson);
router.put('/person/:id', validator, updatePerson);
router.delete('/perons/:id', validator, removePerson);


function getPeople(request, response, next) {
  let resObject = person.read();
  response.json(resObject);
}

function getPersonById(request, response, next) {
  const id = parseInt(request.params.id);
  let resObject = person.read(id);
  response.json(resObject);
}

function createPerson(request, response, next) {
  const personObject = request.body;
  let resObject = person.create(personObject);
  response.json(resObject);
}

function updatePerson(request, response, next) {
  const id = parseInt(request.params.id);
  const personObject = request.body;
  let resObject = person.update(id, personObject);
  response.json(resObject);
}

function removePerson(request, response, next) {

}

module.exports = router;
