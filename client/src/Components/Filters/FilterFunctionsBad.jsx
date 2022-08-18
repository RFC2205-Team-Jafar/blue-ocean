import React, { Component } from "react";
import axios from "axios";
import { Row } from "../../../public/stylesheets/styles.js";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import SalarySliderSteps from "./FilterSalary.jsx";
import {AllContext} from "../../index.jsx";
class FilterFunctionsBad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      filteredListing: [],

      industry: "",

      isRemote: 2,

      employmentType: "",

      minDistance: 5,

      maxDistance: "",

      minSalary: 0,
    };

    this.setIndustry = this.setIndustry.bind(this);
    this.setSite = this.setSite.bind(this);
    this.setEmployment = this.setEmployment.bind(this);
    this.setMaxDist = this.setMaxDist.bind(this);
    this.setSalary = this.setSalary.bind(this);
  }

  setSalary(event) {
    this.setState({
      minSalary: event.target.value,
    });
  }

  setIndustry(event) {
    this.setState({
      industry: event.target.value,
    });
  }

  setSite(event) {
    if (event.target.value === "Remote") {
      this.setState({
        isRemote: 1,
      });
    }
    if (event.target.value === "On-Site") {
      this.setState({
        isRemote: 0,
      });
    }
    if (event.target.value === "Both" || event.target.value === "") {
      this.setState({
        isRemote: 2,
      });
    }
  }

  setEmployment(event) {
    this.setState({
      employmentType: event.target.value,
    });
  }

  setMaxDist(event) {
    this.setState({
      maxDistance: event.target.value,
    });
  }

  fetchFilteredListing = () => {
    axios.get(
        `jobs/:uuid/filter/?industry=${this.state.industry}&maxDistance=${this.state.maxDistance}&minDistance=${this.state.minDistance}&isRemote=${this.state.isRemote}&
        minSalary=${this.state.minSalary}`
      ).then((res) => {
        return res.json();
      }).then((json) => {
        this.setState({
          filteredListing: res.data
        })
      })
  };

  render() {
    return (
      <FilterRow>
        <SalarySliderSteps onChange={this.setSalary} />
        <InputLabel>
          {" "}
          Industry:
          <Select onChange={this.setIndustry}>
            <MenuItem value="Art"> Art </MenuItem>
            <MenuItem value="Aviation"> Aviation </MenuItem>
            <MenuItem value="Construction"> Construction </MenuItem>
            <MenuItem value="Education"> Education </MenuItem>
            <MenuItem value="Food"> Food </MenuItem>
            <MenuItem value="Healthcare"> Healthcare </MenuItem>
            <MenuItem value="Music"> Music </MenuItem>
            <MenuItem value="Tech"> Tech </MenuItem>
            <MenuItem value="Transportation"> Transportation </MenuItem>
          </Select>
        </InputLabel>
        <InputLabel>
          {" "}
          Site:
          <Select onChange={this.setSite}>
            <MenuItem value="Both"> Both </MenuItem>
            <MenuItem value="Remote"> Remote </MenuItem>
            <MenuItem value="On-Site"> On-Site </MenuItem>
          </Select>
        </InputLabel>
        <InputLabel>
          {" "}
          Employment Type:
          <Select onChange={this.setEmployment}>
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
            <MenuItem value="10"> Within 10 miles </MenuItem>
            <MenuItem value="15"> Within 15 miles </MenuItem>
            <MenuItem value="25"> Within 25 miles </MenuItem>
            <MenuItem value="50"> Within 50 miles</MenuItem>
            <MenuItem value="100"> Within 100 miles </MenuItem>
          </Select>
        </InputLabel>
        <Button variant="contained" onClick={this.fetchFilteredListing}>
          {" "}
          Apply Filters{" "}
        </Button>
      </FilterRow>
    );
  }
}

export default FilterFunctionsBad;

const FilterRow = styled(Row)`
  justify-content: space-evenly;
`;
