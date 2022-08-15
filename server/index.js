require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const app = express();

// middlewares here
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(cors({
  origin: '*',
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(compression());

// routes here
app.get("/", (req, res) => {
  res.send("Hello Team Jafar");
});

if (!module.parent) {
  const PORT = 3000;
  app.listen(PORT);
  console.log("Listening on", process.env.PORT || 3000);
}

module.exports.app = app;
