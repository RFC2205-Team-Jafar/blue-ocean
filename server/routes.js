const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

const authChecker = () => {};

router.post('/jobs/adduser', controller.addUser);

router.post('/jobs/addajob', controller.addAJob);

router.post('/jobs/applyforajob', controller.applyForAJob);

router.put('/jobs/removecandidate', controller.removeCandidate);

router.put('/jobs/closeposting', controller.closePosting);

router.put('/jobs/verifysalary', controller.verifySalary);

module.exports = router;
