const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

const authChecker = () => {};

/*--------------------Test Routes---------------*/
router.get('/isSeeker/:uuid', controller.isSeeker);
router.get('/isRecruiter/:uuid', controller.isRecruiter);


/*----------------------Get Routes---------------*/
router.get('/jobs/noauth', controller.noAuth);
router.get('/jobs/:uuid/signon', controller.signOn);
router.get('/jobs/:uuid/filter', controller.filter);
router.get('/jobs/:uuid/applied', controller.applied);



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
