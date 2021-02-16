'use strict';

require('dotenv').config();

const server = require('./src/serverV2.js');
const PORT = process.env.PORT;

server.start(PORT);
