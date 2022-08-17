require("dotenv").config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');
const app = express();
const routes = require('./routes.js');

// middlewares here
app.use(express.json());
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


app.get("/downloadFile", async (req, res) => {
  var resume = "https://jafar-2022.s3.amazonaws.com/Tripp+(8)+.doc"
  var searchWords = ["tripp", "home", "Ready", "bites"]

  try {
    const results = await parseResume(resume, searchWords)
    console.log('results', results)
    return res.json({ status: "success" });
  } catch (err) {
    console.log(err);
  }

});

module.exports.app = app;