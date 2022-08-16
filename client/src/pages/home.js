import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../index.jsx";

const Home = () => {
  return (
    <>
      <h1>
        {" "}
        LinkedOut Navbar <span>signUp/login(modal)</span>{" "}
      </h1>

      {/* create account shall be placed in login modal */}
      <Link to="signUp">Create Account</Link>

      {/* <h1> Image Gallery </h1> */}

      <HeaderGallery />

      <FilterFunctions />

      <h1> Jobs (newest 20) </h1>
    </>
  );
};

export default Home;
