const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('./controller.js');

const authMiddleware = require('./authMiddleware');

/*--------------------Test Routes---------------*/
// router.get('/isSeeker/:uuid', authMiddleware.decodeToken, controller.isSeeker); Funcitoning but nothing is sending a token yet
router.get('/isSeeker/:uuid', controller.isSeeker);
router.get('/isRecruiter/:uuid', controller.isRecruiter);


/*----------------------Get Routes---------------*/
router.get('/jobs/noauth', controller.noAuth);
router.get('/jobs/:uuid/signon', controller.signOn);
router.get('/jobs/:uuid/filter', controller.filter);
router.get('/jobs/:uuid/applied', controller.applied);

router.post('/jobs/adduser', controller.addUser);
router.post('/jobs/addajob', controller.addAJob);
router.post('/jobs/applyforajob', controller.applyForAJob);

router.put('/jobs/removecandidate', controller.removeCandidate);
router.put('/jobs/closeposting', controller.closePosting);
router.put('/jobs/verifysalary', controller.verifySalary);
router.put('/jobs/changeprofile', controller.changeProfile);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
})
// UPLOAD DOC AND CONVERT TO URL

const multer = require("multer");
const {s3Upload} = require("./s3handler");
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
