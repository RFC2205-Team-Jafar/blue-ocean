const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

const authChecker = () => {};

// middleware that triggers upload.array('file)


router.post('/jobs/adduser', controller.addUser); // upload a resume

router.post('/jobs/addajob', controller.addAJob);

router.post('/jobs/applyforajob', controller.applyForAJob); // upload cover letter

router.put('/jobs/removecandidate', controller.removeCandidate);

router.put('/jobs/closeposting', controller.closePosting);

router.put('/jobs/verifysalary', controller.verifySalary);

// UPLOAD DOC AND CONVERT TO URL

const multer = require("multer");
const {s3Upload, parseResume} = require("./s3handler");
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 1000000000, files: 2 },
});

router.post("/uploadFile", upload.array("file"), async (req, res) => {
  try {
    const results = await s3Upload(req.files[0]);
    return res.json({ url: results });  // send back the url in an object
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
