const express = require('express');
const routes = require('./routes');
const elasticsearch = require('./services/elasticsearch');
const path = require('path');
const publicpath = path.join(__dirname, 'public');

const app = express();
//const server = require('http').Server(app);

const envPath = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';

require('dotenv').config({ path: envPath });

app.use(express.json());
app.use('/', express.static(publicpath));
app.use(routes);

elasticsearch.esConfigure();

/*
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
}); */


module.exports = app;