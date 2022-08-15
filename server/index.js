require('dotenv').config();
const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const jobsRoutes = require('./jobsRoutes');
const userRoutes = require('./userRoutes');


// middlewares here
app.use(cors());
app.use(compression());
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/public")));


// routes here
app.use('/jobs', jobsRoutes);
app.use('/user', userRoutes);




if (!module.parent) {
  app.listen(process.env.PORT);
  console.log('Listening on', process.env.PORT);
}

module.exports.app = app;