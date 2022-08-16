const {S3} = require("aws-sdk");
require("dotenv").config();


exports.s3Upload = async (file) => {

  const s3 = new S3();

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${file.originalname}`, //name of file,
    Body: file.buffer,
  }

  console.log(file)

  const response = await s3.upload(param).promise()
  const key = response.key
  const url = key.replace(/\s/g, "+")
  return `https://jafar-2022.s3.amazonaws.com/${url}`

}

const axios = require('axios')
exports.parseResume = async(resume, searchWords) => {
  console.log(resume, searchWords)
  axios.get(resume)
  .then((res) => {
    var resumetxt = res.data
    console.log(res.files)
    // console.log('res', resumetxt.toString('utf16le'))
    // var jsfile = new Buffer.from(resumetxt).toString('base64')
    // console.log(jsfile)
  })
}
