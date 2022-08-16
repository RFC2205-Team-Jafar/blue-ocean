const model = require('./model.js');
const client = require('./db.js');


module.exports = {
  findUserType: async (req, res) => {
    const { uuid } = req.query;
    const data  = await model.findUserType(uuid);
    res.send(data);
  },

  addSeeker: async (req, res) => {
    const seeker = req.body;
    try {
      await model.addSeeker(seeker);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  addRecruiter: async (req, res) => {
    const recruiter = req.body;
    try {
      await model.addRecruiter(recruiter);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  addAJob: async (req, res) => {
    const jobPosting = req.body;
    try {
      await model.addAJob(jobPosting);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  applyForAJob: async (req, res) => {
    const { application } = req.body;
    try {
      await model.applyForAJob(application);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  removeCandidate: async (req, res) => {
    const { seeker_uuid } = req.body;
    try {
      await model.removeCandidate(seeker_uuid);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  // Do we track we get the job so application_status set to True
  closePosting: async (req, res) => {
    const { listing_id } = req.body;
    try {
      await model.closePosting(listing_id);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  },

  verifySalary: async (req, res) => {
    const userInfo = req.body;
    try {
      await model.verifySalary(userInfo);
      res.sendStatus(201);
    } catch(e) {
      console.log('eeeeee', e);
    }
  }
}