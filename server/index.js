require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const app = express();
const routes = require('./routes.js');
// middlewares here
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(compression());

app.use('/', routes);

if (!module.parent) {
  app.listen(process.env.PORT);
  console.log('Listening on', process.env.PORT);
}

module.exports.app = app;