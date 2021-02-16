'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

// Jest is the 'test runner'
//   it is also an assertion library

describe('Testing our server', () => {
  it('should response with people from our db, on GET `/` ', async () =>{
    const response = await request.get('/');

    expect(response.status).toEqual(200);
    expect(response.body.Jacob.name).toEqual('Jacob');
  });

  it('should be able to read requests query strings', async () => {
    const response = await request.get('/?name=Jacob');

    expect(response.status).toEqual(200);
    expect(response.body.Jacob.name).toEqual('Jacob');
  });

  it('should print request url parameters',  async ()  => {
    const response = await request.get('/instructor');

    expect(response.status).toEqual(200);
  });

  it('should error out when no handler is found', async () =>  {

    const response = await request.post('/wrong');

    expect(response.status).toEqual(500);
    expect(response.body.message).toEqual('We can\'t do posts yet');
  });
});
