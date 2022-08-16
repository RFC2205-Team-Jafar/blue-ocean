import React, { Component } from "react";
import Button from "@mui/material/Button";
import {
  StyledHeader,
  Nav,
  Logo,
  ImgHeaderContainer,
  HeaderImg,
} from "../../../public/stylesheets/styles.js";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledHeader>
        <Nav>
          <Logo src={require("../../images/logoipsum.png")}></Logo>
        </Nav>
      </StyledHeader>
    );
  }
}

export default Header;
