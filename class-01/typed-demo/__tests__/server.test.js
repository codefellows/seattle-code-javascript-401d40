'use strict';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app);

describe('Testing our express server', () => {
  it ('should response to a GET on /', () => {
    request.get('/')
      .then(response => {
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('hello');
      });
  });

  it ('shoule response with json data on GET /foo', async () => {

    const response = await request.get('/foo');

    expect(response.status).toEqual(200);
    expect(response.body.number).toEqual(10);
    expect(response.body.string).toEqual('hello world');
  })
});
