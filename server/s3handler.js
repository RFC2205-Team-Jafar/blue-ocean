const {S3} = require("aws-sdk");
require("dotenv").config();

exports.s3Upload = async (file) => {

  const s3 = new S3();

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${file.originalname}`, //name of file,
    Body: file.buffer,
  }

  const response = await s3.upload(param).promise()
  const key = response.key
  const url = key.replace(/\s/g, "+")

  return `https://jafar-2022.s3.amazonaws.com/${url}`

}

// searchFor is a string from recruiter's requested keywords
exports.parseResume = async(resume, searchFor) => {

  var split = resume.split('.com/')
  var unformatted = split[1]
  var key = unformatted.replace(/\+/g, ' ')

  const s3 = new S3();
  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key
  }

  const {Body} = await s3.getObject(param).promise()
  const buf = JSON.stringify(Body);
  const parsed = JSON.parse(buf);
  const searchString = parsed.data.join('');
  const searchWords = searchFor.split(', ');
  const found = [];

  for(var i = 0; i < searchWords.length; i++){
    let wordbuf = Buffer.from(searchWords[i])
    let wordbufstring = JSON.stringify(wordbuf)
    let wordData = JSON.parse(wordbufstring)
    let word = wordData.data.join('')
    if(searchString.includes(word)){
      found.push(searchWords[i])
    }
  }

  return found.join(', ')

}

