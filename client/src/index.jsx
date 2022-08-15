import React, { useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from './pages/home';
import Seeker from './pages/seeker';
import Recruiter from './pages/recruiter';
import Login from './pages/login.js';
import SignUp from './pages/signUp.js';

export const AllContext = createContext();

const App = () => {

  const [counter, setCounter] = useState(5);

  return (
    <Router>
      <AllContext.Provider value={{ counter, setCounter }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/seeker" element={<Seeker />} />
          <Route path="/recruiter" element={<Recruiter />} />
        </Routes>

      </AllContext.Provider>
    </Router>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
