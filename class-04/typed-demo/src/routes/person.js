'use strict';


const express = require('express');
const router =  express.Router();

const PersonInterface = require('../models/person-interface.js');
const PersonModel = require('../models/person-model.js');
const personController = new PersonInterface(PersonModel);

router.get('/person', getPerson);
router.get('/person/:id', getPerson);
router.post('/person', createPerson);

async function getPerson(request, response, next) {

  const id = request.params.id;
  const people = await personController.read(id);
  
  response.json(people);
}

async function createPerson(request, response, next) {

  const personObj = request.body;
  const newPerson = await personController.create(personObj);

  response.json(newPerson);
}

module.exports = router;
