import React, { Component } from "react";
import axios from "axios";
import { Row } from "../../../public/stylesheets/styles.js";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

class FilterFunctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: "",

      isRemote: false,

      employmentType: "",

      minDistance: 5,

      maxDistance: "",
    };

    this.setIndustry = this.setIndustry.bind(this);
    this.setSite = this.setSite.bind(this);
    this.setEmployment = this.setEmployment.bind(this);
    this.setMaxDist = this.setMaxDist.bind(this);
  }

  setIndustry(event) {
    this.setState({
      industry: event.target.value,
    });
    console.log(this.state.industry);
  }

  setSite(event) {
    if (event.target.value === "Remote") {
      this.setState({
        isRemote: true,
      });
    }
    if (event.target.value === "Select" || event.target.value === "On-Site") {
      this.setState({
        isRemote: false,
      });
    }
    console.log(event.target.value);
  }

  setEmployment(event) {
    this.setState({
      employmentType: event.target.value,
    });
    console.log(event.target.value);
  }

  setMaxDist(event) {
    this.setState({
      maxDistance: event.target.value,
    });
    console.log(event.target.value);
  }

  fetchFilteredListing = () => {
    axios
      .get(
        `localhost:3000/jobs/filter/${user.uuid}?industry=${this.state.industry}&maxDistance=${this.state.maxDistance}&minDistance=${this.state.minDistance}&isRemote=${this.state.isRemote}`
      )
      .then(console.log(res.data));
  };

  render() {
    return (
      <Row>
        <InputLabel>
          {" "}
          Industry:
          <Select onChange={this.setIndustry}>
            <MenuItem value="select"> Select </MenuItem>
            <MenuItem value="Transportation"> Transportation </MenuItem>
            <MenuItem value="Education"> Education </MenuItem>
            <MenuItem value="Art"> Art </MenuItem>
            <MenuItem value="Tech"> Tech </MenuItem>
            <MenuItem value="Music"> Music </MenuItem>
            <MenuItem value="Aviation"> Aviation </MenuItem>
            <MenuItem value="Food"> Food </MenuItem>
            <MenuItem value="Healthcare"> Healthcare </MenuItem>
            <MenuItem value="Construction"> Construction </MenuItem>
          </Select>
        </InputLabel>
        <InputLabel>
          {" "}
          Site:
          <Select onChange={this.setSite}>
            <MenuItem value="select"> Select </MenuItem>
            <MenuItem value="Remote"> Remote </MenuItem>
            <MenuItem value="On-Site"> On-Site </MenuItem>
          </Select>
        </InputLabel>
        <InputLabel>
          {" "}
          Employment Type:
          <Select onChange={this.setEmployment}>
            <MenuItem value="select"> Select </MenuItem>
            <MenuItem value="Part-Time"> Part-Time </MenuItem>
            <MenuItem value="Full-Time"> Full-Time </MenuItem>
            <MenuItem value="Contract"> Contract </MenuItem>
            <MenuItem value="Internship"> Internship </MenuItem>
            <MenuItem value="Temp-Position"> Temp-Position </MenuItem>
            <MenuItem value="Seasonal"> Seasonal </MenuItem>
          </Select>
        </InputLabel>
        <InputLabel>
          {" "}
          Max Distance:
          <Select onChange={this.setMaxDist}>
            <MenuItem value="select"> Select </MenuItem>
            <MenuItem value="10"> Within 10 miles </MenuItem>
            <MenuItem value="15"> Within 15 miles </MenuItem>
            <MenuItem value="25"> Within 25 miles </MenuItem>
            <MenuItem value="50"> Within 50 miles</MenuItem>
            <MenuItem value="100"> Within 100 miles </MenuItem>
          </Select>
        </InputLabel>
        <button onClick={this.fetchFilteredListing}> Apply Filters </button>
      </Row>
    );
  }
}

export default FilterFunctions;
