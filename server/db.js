require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

client.connect()
.then(() => {
  console.log('\x1b[33m%s\x1b[0m', 'CONNECTED TO DATABASE');
})
.catch((err) => {
  console.log(err.message);
})


module.exports = client;