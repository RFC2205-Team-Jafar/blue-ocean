require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// middlewares here
app.use(express.static(path.join(__dirname, "../client/public")));

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
