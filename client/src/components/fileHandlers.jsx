import React, { useState, useRef } from 'react';
import axios from 'axios';

const fileUpload = (fileType) => {

  const fileInputRef = useRef()
  const handleUpload = (event) => {
    const[file] = event.target.files;
    console.log(file)
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
    <>
    <button onClick={()=>fileInputRef.current.click()}>
        Upload A {fileType}
      </button>
      <input onChange={handleUpload} multiple={false} ref={fileInputRef} type='file' hidden/>
    </>
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