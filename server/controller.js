const model = require('./model.js');



const  signOn = async (req, res) => {
    uuid = req.params.uuid;
    const isSeeker = await model.isSeeker(uuid);
    const isRecruiter = await model.isRecruiter(uuid);
    console.log(isSeeker.rows[0].exists);
    if(isSeeker.rows[0].exists) {
        model.getUser(uuid, "seeker")
        .then((success) => {
            res.status(200).send(success.rows)
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
    } else if(isRecruiter.rows[0].exists) {
        model.getUser(uuid, "recruiter")
        .then((success) => {
            res.status(200).send(success.rows)
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
        })
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