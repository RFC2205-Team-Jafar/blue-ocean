import React, { useState, createContext, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from './pages/Home.js';
import SignUp from './pages/SignUp.js';
import Seeker from './pages/Seeker';
import Profile from './components/Profile/Profile.js';
import Feed from './components/Feed/Feed.jsx';

// import JobsForSeeker from './components/TestComponents/JobsForSeeker.js';
import Recruiter from './pages/Recruiter';
// import RecruiterProfile from './components/TestComponents/RecruiterProfile.js';
// import ActivePostings from './components/TestComponents/ActivePostings.js';
// import NewJob from './components/TestComponents/NewJob.js';
import PostJob from './components/PostJob/PostJob.jsx'
import { GlobalStyle } from '../public/stylesheets/styles';
import { AuthProvider } from './components/AuthContext.jsx';
// Grabs user location when page is first loaded
import userLocation from './Google_API/userLocation.jsx'

export const AllContext = createContext();
// ismounted? Grab lat & long of user
const App = () => {
  // states
  useEffect(() => {
    userLocation();
  }, [])

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [preferredIndustry, setPreferredIndustry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [company, setCompany] = useState("");
  const [coord_lat, setCoord_lat] = useState();
  const [coord_long, setCoord_long] = useState();

  // const [location, setLocation] = useState({}); // ASK nick if still need this.
  const [resumeUrl, setResumeUrl] = useState('');
  const [coverLetterUrl, setCoverLetterUrl] = useState('');
  // const [uploaded, setUploaded] = useState(false);
  // Grabs user location asynchronously when mounted
  useEffect(() => {
    // userLocation().then(data => setLocation(data));
  }, [])

  return (
    <Router>
      <AuthProvider>
        <AllContext.Provider
          value={{
            // location, setLocation,
            email, setEmail,
            firstName, setFirstName,
            lastName, setLastName,
            accountType, setAccountType,
            preferredIndustry, setPreferredIndustry,
            zipCode, setZipCode,
            company, setCompany,
            coord_lat, setCoord_lat,
            coord_long, setCoord_long,
            resumeUrl, setResumeUrl,
            coverLetterUrl, setCoverLetterUrl,
            // uploaded, setUploaded
          }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signUp" element={<SignUp />} />
            <Route path="seeker" element={<Seeker />} >
              <Route index element={<Feed />} />
              <Route path="profile" element={<Profile userType={'seeker'} />} />
            </Route>
            <Route path="recruiter" element={<Recruiter />} >
              <Route index element={<Feed />} />
              <Route path="profile" element={<Profile userType={'recruiter'} />} />
              <Route path="postAJob" element={<PostJob />} />
            </Route>

            {/* CONFIRM AND DELETE  */}
            {/* <Route path="signUp" element={<SignUp />} />
            <Route path="seeker" element={<Seeker />} />
            <Route path="recruiter" element={<Recruiter />} /> */}

          </Routes>
          {/* </GlobalStyle> */}
        </AllContext.Provider>
      </AuthProvider>
    </Router>
  )
}


const root = createRoot(document.getElementById("root"));
root.render(<App />);

