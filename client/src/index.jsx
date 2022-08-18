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
import Recruiter from './pages/Recruiter';
import PostJob from './components/PostJob/PostJob.jsx'
import { GlobalStyle } from '../public/stylesheets/styles';
import { AuthProvider } from './components/AuthContext.jsx';
import userLocation from './Google_API/userLocation.jsx'

export const AllContext = createContext();
// ismounted? Grab lat & long of user
const App = () => {
  // states

  const [uuid, setUuid] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accountType, setAccountType] = useState("");
  const [preferredIndustry, setPreferredIndustry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [company, setCompany] = useState("");
  const [coord_lat, setCoord_lat] = useState();
  const [coord_long, setCoord_long] = useState();

  const [location, setLocation] = useState({}); // ASK nick if still need this.
  const [resumeUrl, setResumeUrl] = useState('');
  const [coverLetterUrl, setCoverLetterUrl] = useState('');
  // const [uploaded, setUploaded] = useState(false);
  // Grabs user location asynchronously when mounted
  useEffect(() => {
    userLocation().then(data => setLocation(data));
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
        <AllContext.Provider
          value={{
            location, setLocation,
            uuid, setUuid,
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
              <Route index element={<Feed view={{view:'seeker'}}/>} />
              <Route path="profile" element={<Profile userType={'seeker'} />} />
            </Route>
            <Route path="recruiter" element={<Recruiter />} >
              <Route index element={<Feed view={{view:'recruiter'}} applicants={[1, 2, 3, 4, 5, 6]} />} />
              <Route path="profile" element={<Profile userType={'recruiter'} />} />
              <Route path="postAJob" element={<PostJob />} />
            </Route>
          </Routes>
        </AllContext.Provider>
      </AuthProvider>
    </Router>
  )
}


const root = createRoot(document.getElementById("root"));
root.render(<App />);
