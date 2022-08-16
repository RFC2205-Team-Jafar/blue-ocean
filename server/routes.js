const express = require('express');
const router = express.Router();

const authChecker = () => {};

router.get('', (req, res) => {

});

router.get('', authChecker, (req, res) => {

})

router.post('', authChecker, (req, res) => {

});

router.put('', authChecker, (req, res) => {

});

module.exports = router;
