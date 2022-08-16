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
import SeekerProfile from './components/TestComponents/SeekerProfile.js';
import JobsForSeeker from './components/TestComponents/JobsForSeeker.js';
import Login from './pages/Login';
import Recruiter from './pages/Recruiter';
import RecruiterProfile from './components/TestComponents/RecruiterProfile.js';
import ActivePostings from './components/TestComponents/ActivePostings.js';
import NewJob from './components/TestComponents/NewJob.js';
import PostJob from './components/PostJob/PostJob.jsx'
import {GlobalStyle} from '../public/stylesheets/styles';
// Grabs user location when page is first loaded
import userLocation from './Google_API/userLocation.jsx'


export const AllContext = createContext();
// ismounted? Grab lat & long of user
const App = () => {
  // states
  useEffect(() => {
    userLocation();
  }, [])

  const [counter, setCounter] = useState(5);
  const [location, setLocation] = useState({})
  // Grabs user location asynchronously when mounted
  useEffect(() => {
    userLocation().then(data => setLocation(data));
  }, [])

  return (
    <Router>
      <AllContext.Provider value={{ counter, setCounter, location, setLocation }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="seeker" element={<Seeker />} >
          <Route index element={<JobsForSeeker />} />
          <Route path="profile" element={<SeekerProfile />} />
        </Route>
        <Route path="recruiter" element={<Recruiter />} >
          <Route index element={<ActivePostings />} />
          <Route path="profile" element={<RecruiterProfile />} />
          <Route path="postAJob" element={<NewJob />} />
        </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/seeker" element={<Seeker />} />
            <Route path="/recruiter" element={<Recruiter />} />
          </Routes>
        {/* </GlobalStyle> */}
      </AllContext.Provider>
    </Router>

  )
}


const root = createRoot(document.getElementById("root"));
root.render(<App />);

