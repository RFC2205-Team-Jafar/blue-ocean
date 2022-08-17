const client = require('./db.js');

const getUser = (uuid, userType) => {
    if(userType === 'seeker') {
        return client.query(`
            SELECT *
            FROM "Seekers"
            WHERE user_uuid = '${uuid}'
        `)
    } else {
        return client.query(`
        SELECT *
        FROM "Recruiters"
        WHERE user_uuid = '${uuid}'
    `)
    }
}


const getJobs = (/*need to know what the filters are again*/) => {

}



/*-------------Helper Queries---------------*/

const appliedJobs = (uuid) => {
    return client.query(`
    SELECT json_agg(applications)
    FROM (
        SELECT * 
        FROM "SubmittedApplications"
        WHERE seeker_uuid = '${uuid}' 
    ) as applications
    `)
}

const listings = (uuid) => {
    return client.query(`
    SELECT json_agg(listings)
    FROM (
        SELECT * 
        FROM "Listings"
        WHERE recruiter_uuid = '${uuid}' 
    ) as listings
    `)
}

const isSeeker = (uuid) => {
    return client.query(`
    SELECT exists 
        (SELECT 1 FROM "Seekers" WHERE user_uuid = '${uuid}'  LIMIT 1);
    `)
}


const isRecruiter = (uuid) => {
    return client.query(`
    SELECT exists 
        (SELECT 1 FROM "Recruiters" WHERE user_uuid = '${uuid}'  LIMIT 1);
    `)
}


module.exports = {
    isSeeker,
    isRecruiter,
    getUser,
    appliedJobs,
    listings,
    getJobs
}