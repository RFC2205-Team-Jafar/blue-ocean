import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AllContext } from '../index.jsx';

const Home = () => {

  const { counter } = useContext(AllContext);

  return (
  <>
    <h1>LinkedOut Navbar  </h1>
    <h1>Home Counter: {counter} </h1>
    <h1><Link to="/login"> Login Modal to Authenticate </Link></h1>
    <h1><Link to="/signUp">Sign Up </Link></h1>
  </>
  )
};

export default Home;