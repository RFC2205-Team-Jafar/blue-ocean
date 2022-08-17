import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../index.jsx";
import { fileUpload, fileViewer } from "../components/fileHandlers.jsx";

import LoginForm from "../components/loginComponents/LoginForm.jsx";
import HeaderGallery from "../Components/Header/HeaderGallery.jsx";
import QuiltedImageList from "../Components/Header/HeaderGallery2.jsx";
import FilterFunctions from "../Components/Filters/FilterFunctions.jsx";
import FilterStatus from "../Components/Filters/FilterStatus.jsx";

const Home = () => {
  return (
    <>
      <h1>
        {" "}
        LinkedOut Navbar <span>signUp/login(modal)</span>{" "}
      </h1>

      {/* create account shall be placed in login modal */}

      <LoginForm />
      <Link to="signUp">Create Account</Link>

      {/* <h1> Image Gallery </h1> */}

      {/* <HeaderGallery /> */}
      <QuiltedImageList />

      <FilterFunctions />
      <FilterStatus />
      <h1> Jobs (newest 20) </h1>

      {/* {fileUpload('Resume')}
      {fileViewer('https://jafar-2022.s3.amazonaws.com/Clover.docx')} */}
    </>
  );
};

export default Home;
