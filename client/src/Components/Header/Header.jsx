import React, { Component } from "react";
import Button from "@mui/material/Button";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h1>GREENHORN LOGO</h1>
        <Button variant="contained">Sign Up/Login</Button>
      </React.Fragment>
    );
  }
}

export default Header;
