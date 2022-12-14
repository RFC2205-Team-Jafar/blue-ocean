//CONTROLLER
const { AsyncDependenciesBlock } = require('webpack');
const model = require('./model.js');
const client = require('./db.js');
const { parseResume } = require('./s3handler.js')



const  signOn = async (req, res) => {
    let uuid = req.params.uuid;
    try {
        const isSeeker = await model.isSeeker(uuid);
        const isRecruiter = await model.isRecruiter(uuid);
        let isRemote = 2;
        let maxDistance = 30000;
        let employmentType= "Full Time";
        let minSalary = 0;

        // console.log(isSeeker.rows[0].exists);
        if(isSeeker.rows[0].exists) {
            try {
                const user = await model.getUser(uuid, "seeker");
                const appliedJobs = await model.appliedJobs(uuid)
                const defaultJobs = await model.getJobs(uuid,user.rows[0].pref_industry,isRemote,employmentType,maxDistance,minSalary);

                let resData = {
                    ...user.rows[0],
                    account_type: "seeker",
                    appliedJobs: appliedJobs.rows[0].json_agg,
                    defaultJobs: defaultJobs[2].rows[0].json_agg
                }

                res.status(200).send(resData);
            } catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
        } else if(isRecruiter.rows[0].exists) {
            try {
                const user = await model.getUser(uuid, "recruiter");
                const listings = await model.listings(uuid);
                console.log(listings);
                let resData = {
                    ...user.rows[0],
                    account_type: "recruiter",
                    listings: listings.rows[0].json_agg
                    //I forget what else is suppose to be returned during the sign in of recruiter
                    // Is it just the recruiters associated job listings?
                }

                res.status(200).send(resData);
            } catch (err) {
                console.log(err);
                res.sendStatus(500);
            }
        } else {
            res.sendStatus(500);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

const filter = async (req, res) => {
    let uuid = req.params.uuid;

    let industry = req.query.industry || "Tech"
    let isRemote = req.query.isRemote || 2
    let maxDistance = req.query.maxDistance || 50;
    let employmentType= req.query.employmentType || "Full Time";
    let minSalary = parseInt(req.query.minSalary) || 0;

    // console.log(typeof minSalary)
    try {
        const isSeeker = await model.isSeeker(uuid);
        const isRecruiter = await model.isRecruiter(uuid);

        if(isSeeker.rows[0].exists) {
            try {

                const filteredJobs = await model.getJobs(uuid,industry,isRemote,employmentType,maxDistance, minSalary);

                res.status(200).send(filteredJobs[2].rows[0].json_agg)
            } catch  (err) {

                console.log(err);
                res.sendStatus(500)
            }
        } else if(isRecruiter.rows[0].exists) {
            try {

                //kind of faking functionality right now until we figure out how exactly we want to filter recruiter results
                const filteredListings = await model.listings(uuid);

                res.status(200).send(filteredListings.rows[0].json_agg)
            } catch  (err) {

                console.log(err);
                res.sendStatus(500)
            }
        } else {
            res.sendStatus(500);
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

const noAuth = (req, res) => {
    let lat = req.query.lat || 0
    let long = req.query.lng || 0

    model.getJobsNoAuth()
    .then((success) => {
        res.status(200).send(success.rows)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
}

const applied = (req, res) => {

}




/*-------------Helper Controllers---------------*/
const isSeeker = (req, res) => {
    uuid = req.params.uuid;
    model.isSeeker(uuid)
    .then((success) => {
        // console.log(success);
        res.status(200).send(true);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
}

const isRecruiter = (req, res) => {
    uuid = req.params.uuid;
    model.isRecruiter(uuid)
    .then((success) => {
        // console.log(success);
        res.status(200).send(true);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
}

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
    let application = req.body;
    let { resume_url, requested_keywords } = req.body;
    try {
      let matched = await parseResume(resume_url, requested_keywords);
      application.matched_keywords =  matched;
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
  },


  changeProfile: async (req, res) => {
    const { account_type } = req.body;
    try {
      if (account_type === 'seeker') {
        await model.changeSeekerProfile(req.body);
      } else if (account_type === 'recruiter') {
        await model.changeRecruiterProfile(req.body);
      }
      res.sendStatus(200);
    } catch(e) {
      console.log('eeeeeee', e);
    }
  },
  signOn,
  filter,
  noAuth,
  applied,
  isSeeker,
  isRecruiter
}