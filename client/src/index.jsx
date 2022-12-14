import React, { useState, createContext, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import axios from 'axios';
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import Seeker from "./pages/Seeker";
import Profile from "./components/Profile/Profile.js";
import Feed from "./components/Feed/Feed.jsx";

import Recruiter from "./pages/Recruiter";
import PostJob from "./components/PostJob/PostJob.jsx";
import { GlobalStyle } from "../public/stylesheets/styles";
import { AuthProvider } from "./components/AuthContext.jsx";
import userLocation from "./Google_API/userLocation.jsx";

import NavigationBar from "./components/NavBar/NavigationBar.jsx";

export const AllContext = createContext();
// ismounted? Grab lat & long of user
const App = () => {
  // states
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [accountType, setAccountType] = useState();
  const [preferredIndustry, setPreferredIndustry] = useState();
  const [zipCode, setZipCode] = useState();
  const [company, setCompany] = useState();

  const [coord_lat, setCoord_lat] = useState();
  const [coord_long, setCoord_long] = useState();
  const [unsignedJobs, setUnsignedJobs] = useState();
  const [defaultJobs, setDefaultJobs] = useState();
  const [listings, setListings] = useState();
  const [appliedJobs, setAppliedJobs] = useState();
  const [recruiterPostings, setRecruiterPostings] = useState();
  const [resumeUrl, setResumeUrl] = useState();
  const [coverLetterUrl, setCoverLetterUrl] = useState();
  const [uuid, setUuid] = useState();
  const [currentList, setCurrentList] = useState('default');

  const [location, setLocation] = useState({});

  // Grabs user location asynchronously when mounted
  useEffect(() => {
    userLocation().then((data) => setLocation(data));
  }, []);
  useEffect(() => {
    axios.get('/jobs/noAuth')
    .then(jobListings => setUnsignedJobs(jobListings.data))
    .catch(err => console.error(err))
  }, []);
  useEffect(() => {
    axios.get('/jobs/rxXyEEJqImavbPtUBHrINcvIK5p2/signOn')
    .then(recruiterPostings => setRecruiterPostings(recruiterPostings.data))
    .catch(err => console.error(err))
  }, []);

  return (
    <div>
      <Router>
        <GlobalStyle />
        <AuthProvider>
          <AllContext.Provider
            value={{
              location,
              setLocation,
              uuid,
              setUuid,
              email,
              setEmail,
              firstName,
              setFirstName,
              lastName,
              setLastName,
              accountType,
              setAccountType,
              preferredIndustry,
              setPreferredIndustry,
              zipCode,
              setZipCode,
              company,
              setCompany,
              coord_lat,
              setCoord_lat,
              coord_long,
              setCoord_long,
              resumeUrl,
              setResumeUrl,
              coverLetterUrl,
              setCoverLetterUrl,
              defaultJobs,
              setDefaultJobs,
              appliedJobs,
              setAppliedJobs,
              unsignedJobs,
              setUnsignedJobs,
              recruiterPostings,
              setRecruiterPostings,
              currentList, setCurrentList
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="signUp" element={<SignUp />} />
              {/* <Route path="signUpGoogle" element={<SignUpGoogle />} /> */}
              <Route path="seeker" element={<Seeker />}>
                <Route index element={<Feed view={{ view: "seeker" }} />} />
                <Route path="profile" element={<Profile />} />
              </Route>
              <Route path="recruiter" element={<Recruiter />}>
                <Route
                  index
                  element={
                    <Feed
                      view={{ view: "recruiter" }}
                      applicants={[1, 2, 3, 4, 5, 6]}
                    />
                  }
                />
                <Route path="profile" element={<Profile />} />
                <Route path="postAJob" element={<PostJob />} />
              </Route>
            </Routes>
          </AllContext.Provider>
        </AuthProvider>
      </Router>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
