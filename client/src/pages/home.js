import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
  <>
    <h1>LinkedOut Navbar </h1>
    <h1><Link to="/login"> Login Modal to Authenticate </Link></h1>
    <h1><Link to="/signUp">Sign Up </Link></h1>
  </>
  )
};

export default Home;