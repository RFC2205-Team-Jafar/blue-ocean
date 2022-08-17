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


const getJobs = (industry, isRemote, employmentType, maxDistance) => {
    // console.log("industry: ",industry)
    if(isRemote >= 2){
        // console.log("remote is not 1 or 0");    
        return client.query(`
            SELECT json_agg(jobs)
            FROM(
                SELECT * 
                FROM "Listings"
                WHERE industry = '${industry}'
                AND employment_type = '${employmentType}'
            ) as jobs
        `)
    } else {
        return client.query(`
            SELECT json_agg(jobs)
            FROM(
                SELECT * 
                FROM "Listings"
                WHERE industry = '${industry}'
                AND employment_type = '${employmentType}'
                AND is_remote = ${isRemote}
            ) as jobs
        `)
    }
}



/*-------------Helper Queries---------------*/

// const appliedJobs = (uuid) => {
//     return client.query(`
//     SELECT json_agg(applications)
//     FROM (
//         SELECT * 
//         FROM "SubmittedApplications"
//         WHERE seeker_uuid = '${uuid}' 
//     ) as applications
//     `)
// }

const appliedJobs = (uuid) => {
    return client.query(`
    SELECT json_agg(listings)
    FROM (
        SELECT *
        FROM "Listings" 
        WHERE listing_id 
        IN (SELECT listing_id FROM "SubmittedApplications" WHERE seeker_uuid = '${uuid}')
    ) as listings
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