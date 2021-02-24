'use strict';

const server = require('../server.js');
const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server.app);

describe('Testing Authorization routes', () => {

  let user = null
  it('Users with role \'user\' should only be able to read', async () => {

    const newUser = await request.post('/signup').send({
      username: 'Jacob',
      password: 'test',
      role: 'user',
    });

    expect(newUser.status).toEqual(201);
    user = newUser.body;
    expect(newUser.body.capabilities).toEqual(["read"]);

    const readFood = await request.get('/food').set('Authorization', `Bearer ${newUser.body.token}`);

    expect(readFood.status).toEqual(200);
    expect(readFood.body).toBeTruthy();
  });


  it('Should deny user that can\'t write', async () => {

    const writeFood = await request.post('/food').set('Authorization', `Bearer ${user.token}`);

    expect(writeFood.status).toEqual(500);
  });
});
