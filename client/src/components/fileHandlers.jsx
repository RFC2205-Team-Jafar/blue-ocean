import React, {useState} from 'react';
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
    .then(() => {console.log('file uploaded')})
    .catch((err) => {console.log('err occurred in upload')})
  }

  return (
    <div className="file-upload">
        <form>
          <h1>{fileType}</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit" onClick = {handleUpload}>Upload</button>
        </form>
    </div>
  )
}


const fileViewer = (fileURL) => {

  return (
    <iframe id="file" src= {fileURL} width="1000" height="1000"  frameborder="0" />
  )

}

export {fileUpload, fileViewer};