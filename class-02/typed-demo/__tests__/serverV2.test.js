'use strict';

const supertest = require('supertest');
const server = require('../src/serverV2.js');
const request = supertest(server.app);

describe('Testing server version 2', () => {
  it('should find a person on GET `/`', async ()  => {
    const response = await request.get('/?name=Jacob');

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Jacob');
  });

  it ('should response with all people from database', async () => {
    const response = await request.get('/');

    expect(response.status).toEqual(200);

    const dbKeys = Object.keys(response.body);

    expect(dbKeys.length).toEqual(1);
  });

  it('should send a 500 when no person is found', async () => {
    const response = await request.get('/?name=Johnson');

    expect(response.status).toEqual(500);
  });

  it('should be able to add a new person to db on POST `/person`', async () => {
    const response = await request.post('/person').send({name: 'Chance', role: 'TA'});

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Chance');
  });

  it('should respond with a 500 when no data is present', async () => {
    const response = await request.post('/person');

    expect(response.status).toEqual(500);
  });

  it('should be able to remove a person', async () => {
    const response = await request.delete('/person/Jacob');

    expect(response.status).toEqual(204);
  });

  it ('should response with a 500 when not found', async () => {
    const response = await request.delete('/person/johnson');

    expect(response.status).toEqual(500);
  })
});
