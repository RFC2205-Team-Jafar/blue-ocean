require("dotenv").config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

//FOR DOCUMENT  UPLOADNG
const multer = require("multer");
const {s3Upload, parseResume} = require("./s3handler");
//DOCUMENT UPLOADING END

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

//code to upload files

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 1000000000, files: 2 },
});

app.post("/uploadFile", upload.array("file"), async (req, res) => {
  try {
    const results = await s3Upload(req.files[0]);
    return res.json({ url: results });
  } catch (err) {
    console.log(err);
  }
});

app.get("/downloadFile", async (req, res) => {

  var resume = "https://jafar-2022.s3.amazonaws.com/Clover.docx"
  // var resume = "https://jafar-2022.s3.amazonaws.com/Jean+Kim+Resume++(1).pdf"
  var searchWords = ["lucky", "calm",  "bites"]

  try {
    const results = await parseResume(resume, searchWords)
    return res.json({ status: "success" });
  } catch (err) {
    console.log(err);
  }

});

module.exports.app = app;