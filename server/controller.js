const model = require('./model.js');
const client = require('./db.js');


module.exports = {
  addUser: async (req, res) => {
    const user = req.body; // expect body to contain full user info
    if (user.account_type === 'seeker') {
      try {
        await model.addSeeker(user);
        await model.addToFirebase(user);
        res.sendStatus(201);
      } catch(e) {
        console.log('eeeeee', e);
      }
    } else if (user.account_type === 'recruiter') {
      try {
        await model.addRecruiter(user);
        await model.addToFirebase(user);
        res.sendStatus(201);
      } catch(e) {
        console.log('eeeeee', e);
      }
    }
  },

  // WORKING
  addAJob: async (req, res) => {
    const jobPosting = req.body; // expect body to contain full listing info (recruiter info + job)
    try {
      await model.addAJob(jobPosting);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  // WORKING
  applyForAJob: async (req, res) => {
    const application = req.body;
    try {
      await model.applyForAJob(application);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  // WORKING set candidate status to 'not considered'
  removeCandidate: async (req, res) => {

    const { seeker_uuid, listing_id } = req.body;
    try {
      await model.removeCandidate(seeker_uuid, listing_id);
      res.sendStatus(200);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  // WORKING set listing status to 'false' and set all candidate status to 'not considered'
  closePosting: async (req, res) => {
    const { listing_id } = req.body;
    try {
      await model.closePosting(listing_id);
      await model.removeAllCandidates(listing_id);
      res.sendStatus(200);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  // WORKING
  verifySalary: async (req, res) => {
    const userInfo = req.body;
    try {
      await model.verifySalary(userInfo);
      res.sendStatus(200);
    } catch(e) {
      console.log('eeeeee', e);
    }
  }
}