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

exports.parseResume = async(resume, searchWords) => {
  var split = resume.split('.com/')
  var unformatted = split[1]
  var key = unformatted.replace(/\+/g, ' ')
  console.log(key)
  const s3 = new S3();
  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key
  }

  const {Body} = await s3.getObject(param).promise()
  const contains = []
  for(var i = 0; i < searchWords.length; i++){
    const buf = Buffer.from(searchWords[i])
    if(Body.includes(buf)){
      console.log(buf.toString())
    }
  }

  // const search = searchWords.join(' ')
  // const buf = Buffer.from(search)
  // console.log(buf)
  // console.log(buf.toString('utf8'))
  // console.log(Body.toString())
  // <Buffer 25 50 44 46 2d 31 2e 37 0d 0a 25 b5 b5 b5 b5 0d 0a 31 20 30 20 6f 62 6a 0d 0a 3c 3c 2f 54 79 70 65 2f 43 61 74 61 6c 6f 67 2f 50 61 67 65 73 20 32 20 ... 221827 more bytes>
  // console.log(typeof Body)
  // console.log(charCodeAt(buf[0]))
  // console.log(Body.toString('utf8').codePointAt(0).toString(16))
  // console.log(buf.charCodeAt(0))
  // console.log(typeof file.buffer)
}

function hex_to_ascii(str1)
 {
  var hex  = str1.toString();
  var str = '';
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 8));
  }
  return str;
 }
// const axios = require('axios')

// exports.parseResume = async(resume, searchWords) => {
//   console.log(resume, searchWords)
//   axios.get(resume)
//   .then((res) => {
//     var resumetxt = res.data
//     console.log(res.data)
//     console.log('res', resumetxt.toString('utf16le'))
//     var jsfile = new Buffer.from(resumetxt).toString('base64')
//     console.log(jsfile)
//   })
// }
