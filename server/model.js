const client = require('./db.js');

module.exports = {
  findUserType: (uuid) => {
    const queryString = `SELECT account_type FROM "Firebase" WHERE user_uuid = ${uuid}`;
    return client.query(queryString);
  },

  addSeeker: (seeker) => {
    const { user_uuid, first_name, last_name, coord_lat, coord_long, pref_industry, resume_url } = seeker;
    const queryString = `INSERT INTO "Seekers" VALUES (${user_uuid}, ${first_name}, ${last_name}, ${coord_lat}, ${coord_long}, ${pref_industry}, ${resume_url})`;
    return client.query(queryString);
  },

  addRecruiter: (recruiter) => {
    const { user_uuid, first_name, last_name, company_name } = recruiter;
    const queryString = `INSERT INTO "Recruiters" VALUES (${user_uuid}, ${first_name}, ${last_name}, ${company_name})`;
    return client.query(queryString);
  },

  addAJob: (jobPosting) => {
    const { recruiter_uuid, industry, coord_lat, coord_long, is_remote, title, salary_low, salary_high, pay_adjuster, desc, num_positions, employment_type, requested_keywords } = jobPosting; //expect body to have all these, status should default to true
    const queryString = `INSERT INTO "Listings" (recruiter_uuid, industry, coord_lat, coord_long, is_remote, title, salary_low, salary_high, pay_adjuster, "desc", num_positions, employment_type, requested_keywords) VALUES (${recruiter_uuid}, ${industry}, ${coord_lat}, ${coord_long}, ${is_remote}, ${title}, ${salary_low}, ${salary_high}, ${pay_adjuster}, ${desc}, ${num_positions}, ${employment_type}, ${requested_keywords})`;
    return client.query(queryString);
  },

  applyForAJob: (application) => {
    // what is matched_keywords???????
    const { seeker_uuid, listing_id, coverletter_url, matched_keywords } = application;

    const queryString = `INSERT INTO "SubmittedApplications" (seeker_uuid, listing_id, coverletter_url, matched_keywords) VALUES (${seeker_uuid}, ${listing_id}, ${coverletter_url}, ${matched_keywords})`;

    return client.query(queryString);
  },

  removeCandidate: (seeker_uuid) => {
    const queryString =`UPDATE "SubmittedApplications" SET application_status = false WHERE seeker_uuid = ${ seeker_uuid }`;
    return client.query(queryString);
  },

  // Do we track we get the job so application_status set to True
  closePosting: (listing_id) => {
    const queryString = `UPDATE "Listings" SET status = false
    WHERE listing_id = ${ listing_id }; UPDATE "SubmittedApplications" SET status = false WHERE listing_id = ${ listing_id };`;
    return client.query(queryString);
  },

  verifySalary: (userInfo) => {
    const { seeker_uuid, listing_id, didReceivePromisedPay } = userInfo;
    const queryString = `UPDATE "SubmittedApplications" SET didReceivePromisedPay = ${didReceivePromisedPay} and application_status = "selected" WHERE seeker_uuid = ${seeker_uuid} and listing_id = ${ listing_id }`;
    return client.query(queryString);
  }
}