const client = require('./db.js');

module.exports = {
  findUserType: (uuid) => {
    const queryString = `SELECT account_type FROM "Firebase" WHERE user_uuid = ${uuid}`;
    return client.query(queryString);
  },

  addSeeker: (seeker) => {
    const { user_uuid, first_name, last_name, coord_lat, coord_long, pref_industry, resume_url } = seeker;
    const queryString = `INSERT INTO "Seekers" VALUES ('${user_uuid}', '${first_name}', '${last_name}', ${coord_lat}, ${coord_long}, '${pref_industry}', '${resume_url}')`;
    return client.query(queryString);
  },

  addRecruiter: (recruiter) => {
    const { user_uuid, first_name, last_name, company_name } = recruiter;
    const queryString = `INSERT INTO "Recruiters" VALUES ('${user_uuid}', '${first_name}', '${last_name}', '${company_name}')`;
    return client.query(queryString);
  },

  addAJob: (j) => {
    const queryString = `INSERT INTO "Listings"
                            (recruiter_uuid, industry, coord_lat, coord_long, is_remote, title, salary_low, salary_high, pay_adjuster, "desc", num_positions, employment_type, requested_keywords, company)
                        VALUES ('${j.recruiter_uuid}', '${j.industry}', ${j.coord_lat}, ${j.coord_long}, ${j.   isRemote}, '${j.title}', ${j.salary_low}, ${j.salary_high}, '${j.pay_adjuster}', '${j.description}', ${j.num_positions}, '${j.employment_type}', '${j.requested_keywords}', '${j.company}')`;
    return client.query(queryString);
  },

  applyForAJob: (application) => {
    // what is matched_keywords??????? from resume parser
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
  }
}