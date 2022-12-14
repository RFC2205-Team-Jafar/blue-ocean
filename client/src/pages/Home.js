import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../index.jsx";

import LoginForm from "../components/loginComponents/LoginForm.jsx";
import { InterviewInviteModal } from "../Google_API/interviewInvite.jsx";
import PostJob from "../components/PostJob/PostJob.jsx";
import HeaderGallery from "../components/Header/ImageGallery.jsx";
import FilterFunctions from "../components/Filters/FilterFunctions.jsx";
import Feed from "../components/Feed/Feed.jsx";
import NavigationBar from "../components/NavBar/NavigationBar.jsx";

import { fileUpload } from "../components/fileHandlers.jsx";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <HeaderGallery />
      <Feed view={{ view: "seeker" }} />
    </>
  );
};

export default Home;
