import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AllContext } from '../index.jsx';
import {fileUpload, fileViewer} from '../components/fileHandlers.jsx';

const Home = () => {

  return (
<<<<<<< HEAD
  <>
    <h1>LinkedOut Navbar  </h1>
    <h1>Home Counter: {counter} </h1>
    <h1><Link to="/login"> Login Modal to Authenticate </Link></h1>
    <h1><Link to="/signUp">Sign Up </Link></h1>
    {fileUpload("Resume")}
    {fileUpload("Cover Letter")}
    {fileViewer("https://jafar-2022.s3.amazonaws.com/Jean+Kim+Resume+.docx")}
    {fileViewer("https://jafar-2022.s3.amazonaws.com/Clover.docx")}
  </>
=======
    <>
      <h1> LinkedOut Navbar      <span>signUp/login(modal)</span> </h1>

      {/* create account shall be placed in login modal */}
      <Link to="signUp">Create Account</Link>

      <h1> Image Gallery </h1>

      <h1> Jobs (newest 20) </h1>

    </>
>>>>>>> 08db81fce5d2ccc7f879953303c0a3af27e738f1
  )
};

export default Home;