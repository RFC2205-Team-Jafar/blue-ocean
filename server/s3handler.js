const {S3} = require("aws-sdk");
require("dotenv").config();


exports.s3Upload = async (file) => {

  console.log('file', file)

  const s3 = new S3();

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${file.originalname}`, //name of file,
    Body: file.buffer,
  }

  const response = await s3.upload(param).promise()
  console.log('response', response)
  const key = response.key
  const url = key.replace(/\s/g, "+")
  return `https://jafar-2022.s3.amazonaws.com/${url}`

}

exports.parseResume = async(resume, searchWords) => {

  const resumetxt =
}