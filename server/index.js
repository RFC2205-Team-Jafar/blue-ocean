require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// middlewares here
app.use(express.static(path.join(__dirname, "../client/public")));


// routes here
app.get('/', (req, res) => {
  res.send('Hello Team Jafar');
});

app.post('/uploadFile', (req,res) => {
  console.log('req', req)
  console.log('in server')
});


if (!module.parent) {
  app.listen(process.env.PORT);
  console.log('Listening on', process.env.PORT);
}

module.exports.app = app;