import React, { useState, createContext } from 'react';
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
import Recruiter from './pages/Recruiter';
import RecruiterProfile from './components/TestComponents/RecruiterProfile.js';
import ActivePostings from './components/TestComponents/ActivePostings.js';
import NewJob from './components/TestComponents/NewJob.js';

export const AllContext = createContext();

const App = () => {
  // states
  const [counter, setCounter] = useState(5);

  return (
    <Router>
      <AllContext.Provider value={{ counter, setCounter }}>
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

        </Routes>
      </AllContext.Provider>
    </Router>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);


// path="jobsForSeeker"