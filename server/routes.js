const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

const authChecker = () => {};

router.post('/jobs/user', authChecker, (req, res) => {

});

router.post('', authChecker, (req, res) => {

})

router.post('', authChecker, (req, res) => {

});

router.put('', authChecker, (req, res) => {

});

router.put('', authChecker, (req, res) => {

});

router.put('', authChecker, (req, res) => {

});

module.exports = router;
