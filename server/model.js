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
    // console.log("inside models", isRemote);
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
    return client,query(queryString);
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
    console.log(queryString);
    return client.query(queryString, [listing_id]);
  },

  // TO CONFIRM
  changeSeekerProfile: (userInfo) => {
    const { user_uuid, first_name, last_name, zip, pref_industry, resume_url } = userInfo;
    const queryString = `UPDATE "Seekrs"
                         SET 'first_name' = $1,
                             'last_name' = $2,
                             'pref_industry' = $3,
                             'resume_url' = $4,
                             'zip' = $5
                         WHERE 'user_uuid' = $6
                         `;
    return client.query(queryString, [first_name, last_name, pref_industry, resume_url, zip, user_uuid]);
  },

  // TO CONFIRM
  changeRecruiterProfile: (userInfo) => {
    const { user_uuid, first_name, last_name, company_name } = userInfo;
    const queryString = `UPDATE "Recruiters"
                         SET 'first_name' = $1,
                             'last_name' = $2,
                             'company_name' = $3
                         WHERE 'user_uuid' = $4`;
    return client.query(queryString, [first_name, last_name, company_name, user_uuid])
  },

  // TO CONFIRM
  changeUserEmail: (userInfo) => {
    const { user_uuid, email } = userInfo;
    const queryString = `UPDATE "Firebase"
                         SET 'email' = $1
                         WHERE 'user_uuid' = $2`;
    return client.query(queryString, [email, user_uuid]);
  },

  isSeeker,
  isRecruiter,
  getUser,
  appliedJobs,
  listings,
  getJobs,
  getJobsNoAuth
}