require('dotenv').config();
const client = require('../db.js');
const axios = require('axios');

// const jobTypes = ['sde', 'data scientit', 'chef', 'project manager'];

const urls = [
  "https://serpapi.com/searches/888f1c2c92f79732/62fabd228ccee02949380496.json",
  "https://serpapi.com/searches/65c5bc521c0a4cfb/62fab4c59bddf7e0fe0f7754.json",
  "https://serpapi.com/searches/82df7b10da1c1ae6/62fabd02c640d2df1c0e4dc2.json"
];

// const seeding = async (arr) => {
//   arr.map(url => {
//     let res = await axios.get(url);
//     let jobs = res.data.jobs_results;
//     jobs.map(job => {
//       let obj = {};
//       obj.recruiter_uuid = 'rxXyEEJqImavbPtUBHrINcvIK5p2';
//       obj.title = job.title;
//       obj.desp = job.description;
//       obj.is_remote = job.location === 'Anywhere' ? true : false;
//       obj.coord_lat = 0;
//       obj.coord_long = 0;
//       obj.employment_type = job.detected_extensions.schedule_type;
//       return obj;
//     })
//     console.log(obj);

//     // let query = `INSERT INTO listings (recruiter_uuid, industry, coord_lat, coord_long, is_remote, title, desc, employment_type)
//     // VALUES ('rxXyEEJqImavbPtUBHrINcvIK5p2', '${name}', '${email}', '${product_id}')`
//   })
// };

// seeding(urls);

for (let url of urls) {
  axios.get(url)
    .then(res => {
      let jobs = res.data.jobs_results;
      jobs.forEach(job => {
        let obj = {};
        obj.recruiter_uuid = 'rxXyEEJqImavbPtUBHrINcvIK5p2';
        obj.title = job.title;
        obj.desp = job.description;
        obj.is_remote = job.location === 'Anywhere' ? true : false;
        obj.coord_lat = 0;
        obj.coord_long = 0;
        obj.employment_type = job.detected_extensions.schedule_type;

        console.log(obj.employment_type);
        let queryString = `INSERT INTO "Listings" (recruiter_uuid, coord_lat, coord_long, is_remote, title, "desc", employment_type) VALUES ('${obj.recruiter_uuid}', '0', '0', '${obj.is_remote}','${obj.title}', '${obj.desp}', '${obj.employment_type}' )`;
        client.query(queryString);
      })
    })
    .catch(e => {
      console.log('eeeeeeeeeeee', e);
    })
}


