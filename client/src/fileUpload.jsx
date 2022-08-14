import React, {useState} from 'react';
import axios from 'axios';

const FileUpload= (fileType) => {

  const [file, setFile] = useState()

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleUpload = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }
    console.log('formData', formData)
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

export default FileUpload;