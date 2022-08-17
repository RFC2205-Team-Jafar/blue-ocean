import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { AllContext } from '../index.jsx';

const uploadCL = () => {

  const fileInputRef = useRef()
  const [uploaded, setUploaded] = useState(false);
  const { coverLetterUrl, setCoverLetterUrl } = useContext(AllContext);

  const uploadCL = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }

    axios.post('/uploadFile', formData, config)
      .then((res) => {
        setUploaded(true)
        setCoverLetterUrl(res.data.url);
     })
      .catch((err) => { console.log('err occurred in upload') })
  }

  if(uploaded){
    return (
      <p>Cover Letter uploaded </p>
    )
  } else {
    return (
      <>
      <Button variant='contained' onClick={()=>fileInputRef.current.click()}>
          Upload A Cover Letter
        </Button>
        <input onChange={uploadCL} multiple={false} ref={fileInputRef} type='file' hidden/>
      </>
    )
  }

}


const fileViewer = (fileURL) => {

  if (fileURL.includes('.doc')) {
    var url = `https://docs.google.com/gview?url=${fileURL}&embedded=true`
  } else {
    var url = fileURL
  }

  return (
    <div>
      <a href={fileURL}>Download</a>
      <br />
      <iframe src={url} width="100%" height="800px"></iframe>
    </div>
  )

}

export { uploadCL, fileViewer };