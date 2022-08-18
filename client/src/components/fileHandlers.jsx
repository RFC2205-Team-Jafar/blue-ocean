import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { AllContext } from '../index.jsx';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Row } from '../../public/stylesheets/styles.js';

const fileUpload = (fileType) => {

  const fileInputRef = useRef()
  const [uploaded, setUploaded] = useState(false);
  const { resumeUrl, setResumeUrl } = useContext(AllContext);
  const { coverLetterUrl, setCoverLetterUrl } = useContext(AllContext);

  const handleUpload = (event) => {

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
        if(fileType === 'resume' || fileType === 'Resume'){
          setResumeUrl(res.data.url);
        } else {
          setCoverLetterUrl(res.data.url);
        }
     })
      .catch((err) => { console.log('err occurred in upload') })
  }

  if(uploaded){
    return (
      <Row> UPLOADED &nbsp;
      <CheckCircleOutlineOutlinedIcon style = {{color: 'green'}}/>
      </Row>
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

  if (fileURL.includes('.doc')) {
    var url = `https://docs.google.com/gview?url=${fileURL}&embedded=true`
  } else {
    var url = fileURL
  }

  return (
    <>
      <a href={fileURL}>Download</a>
      <br />
      <iframe src={url} height = "100%" frameborder = "0" border = "0" style={{ border: "solid 1px #777", width: "576px", height: "100%", maxHeight: "400px", frameBorder: "0px", scrolling: "yes", borderRadius: "5px", boxShadow: "2px 2px 10px black" }}></iframe>
    </>
  )

}

export { fileUpload, fileViewer };