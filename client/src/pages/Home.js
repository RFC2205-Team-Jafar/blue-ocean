import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../index.jsx";

import LoginForm from "../components/loginComponents/LoginForm.jsx";
import { InterviewInviteModal } from "../Google_API/interviewInvite.jsx";
import PostJob from "../components/PostJob/PostJob.jsx";
import HeaderGallery from "../components/Header/ImageGallery.jsx";
import FilterFunctions from "../components/Filters/FilterFunctions.jsx";
import Feed from "../components/Feed/Feed.jsx";
import NavigationBar from '../components/NavBar/NavigationBar.jsx';

import { fileUpload } from "../components/fileHandlers.jsx";

const Home = () => {
  return (
    <>
      {/* <NavigationBar/>
      <h1> Greenhorn Navbar </h1> */}
      <HeaderGallery />
      {/* <FilterFunctions /> */}
      {/* <h1> Jobs (newest 20) </h1> */}
      <div>
        <Link to="signUp">Create Account</Link>
      </div>
      <div>
        <Link to="seeker">Redirect to Seeker view </Link>
      </div>
      <div>
        <Link to="recruiter">Redirect to Recruiter view </Link>
      </div>
      <Feed view={{view:'seeker'}}/>
<<<<<<< HEAD

=======
>>>>>>> 385b57bf64ebc47655dddd7fd650e4d6e9a6f3e0
    </>
  );
};

export default Home;
