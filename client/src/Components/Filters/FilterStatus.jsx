import React, { Component } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

class FilterStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appliedJobs: [],
    };
  }

  fetchApplied = () => {
    axios.get(`jobs/oSl2HNei1PTAsG3TijrfidKJ6dI2/applied`).then((res) => {
      console.log(res.data);
      this.setState({
        appliedJobs: [res.data][0],
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="contained" onClick={this.fetchApplied}>
          {" "}
          Applied Jobs{" "}
        </Button>
      </React.Fragment>
    );
  }
}

export default FilterStatus;
