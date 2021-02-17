'use strict';

const server =  require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);


describe('Server tests', () => {
  it('should pass a 500 error when no name is attached to the url', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

    it('should pass a 404 error when no route is triggered', async () => {
    const response = await request.get('/wrong');

    expect(response.status).toEqual(404);
    expect(response.text).toEqual('That route is not found')
  });

  it('should be able to create a person on POST /person', async () => {

    const response = await request.post('/person').send({
      name: 'Jacob',
      role: 'instructor',
    });

    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.data.name).toEqual('Jacob');
  });

    it ('should get a person with by request parameter on GET /person',  async () => {
    const response = await request.get('/person/1');

    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
  });

  it ('should update an existin person on PUT /person/:id', async () => {
    const response = await request.put('/person/1').send({
      name: 'Chance',
      role:  'TA',
    });

    console.log(response.body);
    expect(response.status).toEqual(200);
    expect(response.body.id).toEqual(1);
    expect(response.body.data.name).toEqual('Chance');
  });
});
