import React, { useState } from 'react';
import axios from 'axios';

const fileUpload = (fileType) => {

  const [file, setFile] = useState()

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleUpload = (event) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }
    axios.post('/uploadFile', formData, config)
      .then(() => { console.log('file uploaded') })
      .catch((err) => { console.log('err occurred in upload') })
  }

  return (
    <div className="file-upload">
      <form>
        <h1>{fileType}</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit" onClick={handleUpload}>Upload</button>
      </form>
    </div>
  )
}


const fileViewer = (fileURL) => {

  if(fileURL.includes('.doc')){
    var url = `https://docs.google.com/gview?url=${fileURL}&embedded=true`
  } else {
    var url = fileURL
  }

  return (
    <div>
    <a href = {fileURL}>Download</a>
    <br/>
    <iframe src= {url}></iframe>
    </div>
  )

}

export { fileUpload, fileViewer };