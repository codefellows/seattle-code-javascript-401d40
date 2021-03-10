const { v4: uuid } = require('uuid');
const dynamoose = require('dynamoose');
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {

  let data;

  try {

    const { name, phone } = JSON.parse(event.body);
    let id = uuid();

    let record = new peopleModel({ id, name, phone });
    data = await record.save();

  } catch (e) {
    return {
      statusCode: 500,
      body: e.message
    }
  }

  let response = {
    statusCode: 200,
    body: JSON.stringify(data),
  }

  return response;
}
