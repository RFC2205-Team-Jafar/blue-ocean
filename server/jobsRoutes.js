const express = require('express');
const router = express.Router();

const authChecker = () => {};

// GET newest 10 job posting: no auth needed
router.get('/postings', (req, res) => {

});

// GET detailed info about one posting
router.get('/postings/:postId', authChecker, (req, res) => {

})

// POST a new job: authCheck, then add posting to DB
router.post('/postings', authChecker, (req, res) => {

});

// Update an existing job posting: authCheck, then update posting
router.put('/postings/:postId', authChecker, (req, res) => {

});

// Delete a job posting: authCheck, then remove job posting from recruiter's account(do not remove from DB)
router.delete('/postings/:postId', authChecker, (req, res) => {

});

module.exports = router;
