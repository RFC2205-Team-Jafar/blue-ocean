const model = require('./model.js');



const  signOn = async (req, res) => {
    uuid = req.params.uuid;
    const isSeeker = await model.isSeeker(uuid);
    const isRecruiter = await model.isRecruiter(uuid);
    let isRemote = 2;
    let maxDistance = 50;
    let employmentType= "Full Time";

    // console.log(isSeeker.rows[0].exists);
    if(isSeeker.rows[0].exists) {
        try {
            const user = await model.getUser(uuid, "seeker");
            const appliedJobs = await model.appliedJobs(uuid)
            const defaultJobs = await model.getJobs(user.rows[0].pref_industry,isRemote,employmentType,maxDistance);

            let resData = {
                ...user.rows[0],
                appliedJobs: appliedJobs.rows[0].json_agg,
                defaultJobs: defaultJobs.rows[0].json_agg
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
            // console.log(listings.rows[0]);
            let resData = {
                ...user.rows[0],
                listings: listings.rows[0]
                //I forget what else is suppose to be returned during the sign in of recruiter
                // Is it just the recruiters associated job listings? 
            }

            res.status(200).send(resData);
        } catch {
            res.sendStatus(500);
        }
    } else {
        res.sendStatus(500);
    }
}

const filter = (req, res) => {
    
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
    signOn,
    filter,
    noAuth,
    applied,
    isSeeker,
    isRecruiter
}