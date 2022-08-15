const express = require('express');
const router = express.Router();

const authChecker = () => {};

router.use(authChecker());

// Pull user profile from DB
router.get('/:uuid', authChecker, (req, res) => {
  // use uuid to query db and find out user type
  // if jobseeker => return profile + related jobs + applied jobs;
  // if recruiter => return profile + related postings (with applicants info for each posting)
});


// Register a user -> create a user to DB
router.post('/newUser', (req, res) => {
  // based on selected role: seeker/recruiter
  // add user to seeker / recruiter table
});


// Update user profile
router.put('/:uuid', authChecker, (req, res) => {
});


// Deactivate user from DB --OPTIONAL
router.delete('/:uuid', authChecker, (req, res) => {
});

module.exports = router;
