const dynamoose = require('dynamoose');

// this whole process is magic, between AWS Lambda and DynamoDB
const peopleSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

// the model looks at a table based on the string argument given to this model.
module.exports = dynamoose.model('people', peopleSchema);
