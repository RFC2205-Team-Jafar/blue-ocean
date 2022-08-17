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


const getJobsNoAuth = () => {
        return client.query(`
            SELECT * 
            FROM "Listings"
            ORDER BY
                listing_id DESC
            LIMIT 20
        `)
}


const getJobs = (industry, isRemote, employmentType, maxDistance) => {
    console.log("inside models", isRemote);
    if(isRemote == 2){
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
    } else if(isRemote == 1) {
        return client.query(`
            SELECT json_agg(jobs)
            FROM(
                SELECT * 
                FROM "Listings"
                WHERE industry = '${industry}'
                AND employment_type = '${employmentType}'
                AND is_remote = true
            ) as jobs
        `)
    } else if(isRemote == 0) {
        return client.query(`
            SELECT json_agg(jobs)
            FROM(
                SELECT * 
                FROM "Listings"
                WHERE industry = '${industry}'
                AND employment_type = '${employmentType}'
                AND is_remote = false
            ) as jobs
        `)
    }
}



/*-------------Helper Queries---------------*/

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

// IN PROGRESS NEEDS TO RETURN ALL APPLICANTS FOR EACH LISTING AS WELL
// const listings = (uuid) => {
//     return client.query(`
//         SELECT json_agg(listing)
//         FROM (
//             SELECT *
//             FROM "Listings"
//             WHERE recruiter_uuid = '${uuid}'
//         ) as listing
//     `)
// }

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
    getJobs,
    getJobsNoAuth
}