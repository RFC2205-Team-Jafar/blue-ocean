import React, { Component } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

class FilterStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appliedJobs: [],
      status: false,
    };
  }

  fetchApplied = () => {
    axios
      .get(
        `localhost:3000/jobs/filter/${user.uuid}?status=${this.state.status}`
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          appliedJobs: [res.data][0],
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="contained" onClick={this.fetchApplied}> Applied Jobs </Button>
      </React.Fragment>
    );
  }
}

export default FilterStatus;
