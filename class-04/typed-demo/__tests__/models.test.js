'use strict';

require('@code-fellows/supergoose');

const PersonInterface = require('../src/models/person-interface.js');
const personModel = require('../src/models/person-model.js');

const controller = new PersonInterface(personModel);

describe('testing the model controller', () => {
  it ('should be able to create a valid model', async () => {

    const newPerson = await controller.create({name: 'test', role:'test'});

    expect(newPerson.name).toEqual('test');
  });
});
