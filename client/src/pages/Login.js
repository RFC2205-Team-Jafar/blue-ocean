import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from '../index.jsx';
import SampleLoginForm from '../components/ModalTemplate/SampleLoginForm';

const Login = () => {
  const { counter } = useContext(AllContext);

  return (
    <>
      <SampleLoginForm />

      <h1> {counter} </h1>
      <div>
        <Link to="/seeker">Redirect to Seeker view </Link>
      </div>
      <div>
        <Link to="/recruiter">Redirect to Recruiter view </Link>
      </div>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
};

export default Login;


