const model = require('./model.js');



const  signOn = async (req, res) => {
    uuid = req.params.uuid;
    const isSeeker = await model.isSeeker(uuid);
    const isRecruiter = await model.isRecruiter(uuid);
    // console.log(isSeeker.rows[0].exists);
    if(isSeeker.rows[0].exists) {
        try {
            const user = await model.getUser(uuid, "seeker");
            const appliedJobs = await model.appliedJobs(uuid)

            let resData = {
                ...user.rows[0],
                appliedJobs: appliedJobs.rows[0].json_agg
            }

            res.status(200).send(resData);
        } catch {
            res.sendStatus(500);
        }
    } else if(isRecruiter.rows[0].exists) {
        try {
            const user = await model.getUser(uuid, "recruiter");
            const listings = await model.listings(uuid);
            let resData = {
                ...user.rows[0],
                listings: listings.rows[0].json_agg
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