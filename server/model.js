//MODEL

client = require('./db.js');

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


const getJobs = (industry, isRemote, employmentType, maxDistance, minSalary) => {
    if(isRemote == 2){
        return client.query(`
            CREATE EXTENSION IF NOT EXISTS cube;
            CREATE EXTENSION IF NOT EXISTS earthdistance;

            SELECT json_agg(jobs)
            FROM(
                WITH matchedseekerlat AS (
                    SELECT seeker.coord_lat
                    FROM "Seekers" as seeker
                    WHERE user_uuid = 'oSlHNei1PTAsG3TijrfidKJ6dI2'
                ), matchedseekerlong AS (
                    SELECT seeker.coord_lat
                    FROM "Seekers" as seeker
                    WHERE user_uuid = 'oSlHNei1PTAsG3TijrfidKJ6dI2'
                )


                SELECT *,(
                    POINT(business.coord_long, business.coord_lat)<@>POINT((SELECT * FROM matchedseekerlat LIMIT 1), (SELECT * FROM matchedseekerlong LIMIT 1))
                ) as distance
                FROM "Listings" business

                WHERE 
                    (POINT(business.coord_long, business.coord_lat)<@>POINT((SELECT * FROM matchedseekerlat LIMIT 1), (SELECT * FROM matchedseekerlong LIMIT 1))) <= ${maxDistance}
                    AND industry = '${industry}'
                    AND employment_type = '${employmentType}'
                    AND ${minSalary} <= salary_low
                    AND status = true
            ) as jobs
        `)
    } else if(isRemote == 1) {
        return client.query(`
            CREATE EXTENSION IF NOT EXISTS cube;
            CREATE EXTENSION IF NOT EXISTS earthdistance;

            SELECT json_agg(jobs)
            FROM(
                WITH matchedseekerlat AS (
                    SELECT seeker.coord_lat
                    FROM "Seekers" as seeker
                    WHERE user_uuid = 'oSlHNei1PTAsG3TijrfidKJ6dI2'
                ), matchedseekerlong AS (
                    SELECT seeker.coord_lat
                    FROM "Seekers" as seeker
                    WHERE user_uuid = 'oSlHNei1PTAsG3TijrfidKJ6dI2'
                )


                SELECT *,(
                    POINT(business.coord_long, business.coord_lat)<@>POINT((SELECT * FROM matchedseekerlat LIMIT 1), (SELECT * FROM matchedseekerlong LIMIT 1))
                ) as distance
                FROM "Listings" business

                WHERE 
                    (POINT(business.coord_long, business.coord_lat)<@>POINT((SELECT * FROM matchedseekerlat LIMIT 1), (SELECT * FROM matchedseekerlong LIMIT 1))) <= ${maxDistance}
                    AND industry = '${industry}'
                    AND employment_type = '${employmentType}'
                    AND is_remote = true
                    AND ${minSalary} <= salary_low
                    AND status = true
            ) as jobs
        `)
    } else if(isRemote == 0) {
        return client.query(`
            CREATE EXTENSION IF NOT EXISTS cube;
            CREATE EXTENSION IF NOT EXISTS earthdistance;

            SELECT json_agg(jobs)
            FROM(
                WITH matchedseekerlat AS (
                    SELECT seeker.coord_lat
                    FROM "Seekers" as seeker
                    WHERE user_uuid = 'oSlHNei1PTAsG3TijrfidKJ6dI2'
                ), matchedseekerlong AS (
                    SELECT seeker.coord_lat
                    FROM "Seekers" as seeker
                    WHERE user_uuid = 'oSlHNei1PTAsG3TijrfidKJ6dI2'
                )


                SELECT *,(
                    POINT(business.coord_long, business.coord_lat)<@>POINT((SELECT * FROM matchedseekerlat LIMIT 1), (SELECT * FROM matchedseekerlong LIMIT 1))
                ) as distance
                FROM "Listings" business

                WHERE 
                    (POINT(business.coord_long, business.coord_lat)<@>POINT((SELECT * FROM matchedseekerlat LIMIT 1), (SELECT * FROM matchedseekerlong LIMIT 1))) <= ${maxDistance}
                    AND industry = '${industry}'
                    AND employment_type = '${employmentType}'
                    AND is_remote = false
                    AND ${minSalary} <= salary_low
                    AND status = false
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
  addSeeker: (seeker) => {
    const { user_uuid, first_name, last_name, coord_lat, coord_long, pref_industry, resume_url, zip } = seeker;
    const queryString = `INSERT INTO "Seekers"
                          VALUES ('${user_uuid}', '${first_name}', '${last_name}', ${coord_lat}, ${coord_long}, '${pref_industry}', '${resume_url}', '${zip}')`;
    return client.query(queryString);
  },

  addRecruiter: (recruiter) => {
    const { user_uuid, first_name, last_name, company_name } = recruiter;
    const queryString = `INSERT INTO "Recruiters" VALUES ('${user_uuid}', '${first_name}', '${last_name}', '${company_name}')`;
    return client.query(queryString);
  },

  addToFirebase: (user) => {
    const { account_type, user_uuid } = user;
    const queryString = `INSERT INTO "Firebase"
                         VALUES ('${account_type}', '${user_uuid}')`;
    return client.query(queryString);
  },

  addAJob: (j) => {
    const queryString = `INSERT INTO "Listings"
                            (recruiter_uuid, industry, coord_lat, coord_long, is_remote, title, salary_low, salary_high, pay_adjuster, "desc", num_positions, employment_type, requested_keywords, company)
                        VALUES ('${j.recruiter_uuid}', '${j.industry}', ${j.coord_lat}, ${j.coord_long}, ${j.   isRemote}, '${j.title}', ${j.salary_low}, ${j.salary_high}, '${j.pay_adjuster}', '${j.description}', ${j.num_positions}, '${j.employment_type}', '${j.requested_keywords}', '${j.company}')`;
    return client.query(queryString);
  },

  applyForAJob: (application) => {
    const { seeker_uuid, listing_id, coverletter_url, matched_keywords } = application;
    const queryString = `INSERT INTO "SubmittedApplications"
                            (seeker_uuid, listing_id, coverletter_url, matched_keywords)
                         VALUES ('${seeker_uuid}', ${listing_id}, '${coverletter_url}', '${matched_keywords}')`;

    return client.query(queryString);
  },

  removeCandidate: (seeker_uuid, listing_id) => {
    const queryString =`UPDATE "SubmittedApplications"
                        SET "application_status" = 'not considered'
                        WHERE 'seeker_uuid' = $1 and 'listing_id' = $2`;
    return client.query(queryString, [seeker_uuid, listing_id]);
  },

  // set listing status to 'false'
  // set all candidate status to 'not considered'
  closePosting: (listing_id) => {
    const queryString = `UPDATE "Listings"
                        SET status = false
                        WHERE listing_id = $1`
    return client.query(queryString, [listing_id]);
  },

  removeAllCandidates: (listing_id) => {
    const queryString =  `UPDATE "SubmittedApplications"
                          SET application_status = 'not considered'
                          WHERE listing_id = $1`;
    return client.query(queryString, [listing_id]);
  },


  verifySalary: (userInfo) => {
    const { seeker_uuid, listing_id, didReceivePromisedPay } = userInfo;
    const queryString = `UPDATE "SubmittedApplications"
                        SET "didReceivePromisedPay" = ${didReceivePromisedPay}, application_status = 'selected'
                        WHERE seeker_uuid = '${seeker_uuid}' and listing_id = $1`;
    return client.query(queryString, [listing_id]);
  },
  isSeeker,
  isRecruiter,
  getUser,
  appliedJobs,
  listings,
  getJobs,
  getJobsNoAuth
}