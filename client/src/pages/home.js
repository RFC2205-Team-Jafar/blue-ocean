import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../index.jsx";
import Header from "../Components/Header/Header.jsx";
import Filters from "../Components/Filters/Filters.jsx";
import Button from "@mui/material/Button";
import { StyledHeader, Nav } from "../../public/stylesheets/styles";

const Home = () => {
  const { counter } = useContext(AllContext);

  return (
    <>
      {/* <h1>LinkedOut Navbar </h1> */}
      <div>
        <Header />
        <StyledHeader>
        <Nav>
        <Link to="/signUp">
          <Button variant="contained">Sign Up</Button>
        </Link>
        </Nav>
      </StyledHeader>
      </div>
      <h1>Home Counter: {counter} </h1>
      <h1>
        <Link to="/login"> Login Modal to Authenticate </Link>
      </h1>
      <div>
        <Filters />
      </div>
    </>
  );
};

export default Home;
