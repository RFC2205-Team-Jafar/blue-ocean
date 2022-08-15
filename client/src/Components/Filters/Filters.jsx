import React, { Component } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <React.Fragment>
        <Slider> Salary </Slider>
        <Button variant="contained"> Category </Button>
        <Button variant="contained"> Location </Button>
        <Button variant="contained">Job Type</Button>
        <Button variant="contained"> Applied Jobs </Button>
      </React.Fragment>
    );
  }
}

export default Filters;
