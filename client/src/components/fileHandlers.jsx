import React, { useState, useRef } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


const fileUpload = (fileType) => {

  const fileInputRef = useRef()
  const [uploaded, setUploaded] = useState(false);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    formData.append('user_uuid', 'some uuid')
    formData.append('listing_id', 'somelisting or null')
    console.log(formData)
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }
    axios.post(`uploadFile`, formData, config)
      .then((res) => {
        setUploaded(true)
        if(fileType === 'resume' || fileType === 'Resume'){
          //set state // me and Andrew integrate sometime tomorrow
          console.log('resume', res.data.url)

        } else {
          console.log('cover letter', res.data.url)
          //set state for cover letter -- also in global
        }
     })
      .catch((err) => { console.log('err occurred in upload') })
  }

  if(uploaded){
    return (
      <p>{fileType} uploaded </p>
    )
  } else {
    return (
      <>
      <Button variant='contained' onClick={()=>fileInputRef.current.click()}>
          Upload A {fileType}
        </Button>
        <input onChange={handleUpload} multiple={false} ref={fileInputRef} type='file' hidden/>
      </>
    )
  }

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
    <iframe src= {url} width = "100%" height = "800px"></iframe>
    </div>
  )

}

export { fileUpload, fileViewer };