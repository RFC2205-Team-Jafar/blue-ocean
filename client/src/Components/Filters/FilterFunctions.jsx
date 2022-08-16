import React, { Component } from "react";
import axios from "axios";

class FilterFunctions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      industry: "",

      isRemote: false,

      employmentType: "",

      minDistance: 5,

      maxDistance: "",

      isApplied: false,
    };

    this.setIndustry = this.setIndustry.bind(this);
    this.setSite = this.setSite.bind(this);
    this.setEmployment = this.setEmployment.bind(this);
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
      <React.Fragment>
        <label>
          {" "}
          Industry:
          <select onChange={this.setIndustry}>
            <option value="select"> Select </option>
            <option value="Transportation"> Transportation </option>
            <option value="Education"> Education </option>
            <option value="Art"> Art </option>
            <option value="Tech"> Tech </option>
            <option value="Music"> Music </option>
            <option value="Aviation"> Aviation </option>
            <option value="Food"> Food </option>
            <option value="Healthcare"> Healthcare </option>
            <option value="Construction"> Construction </option>
          </select>
        </label>
        <label>
          {" "}
          Site:
          <select onChange={this.setSite}>
            <option value="select"> Select </option>
            <option value="Remote"> Remote </option>
            <option value="On-Site"> On-Site </option>
          </select>
        </label>
        <label>
          {" "}
          Employment Type:
          <select onChange={this.setEmployment}>
            <option value="select"> Select </option>
            <option value="Part-Time"> Part-Time </option>
            <option value="Full-Time"> Full-Time </option>
            <option value="Contract"> Contract </option>
            <option value="Internship"> Internship </option>
            <option value="Temp-Position"> Temp-Position </option>
            <option value="Seasonal"> Seasonal </option>
          </select>
        </label>
        <label>
          {" "}
          Max Distance:
          <select onChange={this.setMaxDist}>
            <option value="select"> Select </option>
            <option value="10mi"> Within 10 miles </option>
            <option value="15mi"> Within 15 miles </option>
            <option value="25mi"> Within 25 miles </option>
            <option value="50mi"> Within 50 miles</option>
            <option value="100mi"> Within 100 miles </option>
          </select>
        </label>
        <button onClick={this.fetchFilteredListing}> Apply Filters </button>
        <div>
          <button> Applied Jobs </button>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterFunctions;
