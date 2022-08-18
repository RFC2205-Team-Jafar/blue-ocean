import React, { useState, useContext } from "react";
import axios from "axios";
import { Row } from "../../../public/stylesheets/styles.js";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import SalarySliderSteps from "./FilterSalary.jsx";
import { AllContext } from "../../index.jsx";

function FilterFunctions() {
  const [filteredListing, setFilteredListing] = useState([]);
  const [industry, setIndustry] = useState("");
  const [isRemote, setIsRemote] = useState(2);
  const [employmentType, setEmploymentType] = useState("");
  const [minDistance, setMinDistance] = useState(5);
  const [maxDistance, setMaxDistance] = useState("");
  const [minSalary, setMinSalary] = useState(0);

  const { uuid } = useContext(AllContext);

  const handleSalary = (event) => {
    setMinSalary(event.target.value);
  };

  const handleIndustry = (event) => {
    setIndustry(event.target.value);
  };

  const handleRemote = (event) => {
    if (event.target.value === "Remote") {
      setIsRemote(1);
    }
    if (event.target.value === "On-Site") {
      setIsRemote(0);
    }
    if (event.target.value === "Both" || event.target.value === "") {
      setIsRemote(2);
    }
  };

  const handleEmployment = (event) => {
    setEmploymentType(event.target.value);
  };

  const handleMaxDist = (event) => {
    setMaxDistance(event.target.value);
  };

  const fetchFilteredListing = () => {
    axios
      .get(
        `jobs/:uuid/filter/?industry=${industry}&maxDistance=${maxDistance}&minDistance=${minDistance}&isRemote=${isRemote}&
        minSalary=${minSalary}`
      )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setFilteredListing(res.data);
      });
  };

  return (
    <>
      <div></div>
      <FilterRow>
        <SalarySliderSteps handleSalary={handleSalary} />
        <InputLabel>
          {" "}
          Industry:
          <Select onChange={handleIndustry}>
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
          <Select onChange={handleRemote}>
            <MenuItem value="Both"> Both </MenuItem>
            <MenuItem value="Remote"> Remote </MenuItem>
            <MenuItem value="On-Site"> On-Site </MenuItem>
          </Select>
        </InputLabel>
        <InputLabel>
          {" "}
          Employment Type:
          <Select onChange={handleEmployment}>
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
          <Select onChange={handleMaxDist}>
            <MenuItem value="10"> Within 10 miles </MenuItem>
            <MenuItem value="15"> Within 15 miles </MenuItem>
            <MenuItem value="25"> Within 25 miles </MenuItem>
            <MenuItem value="50"> Within 50 miles</MenuItem>
            <MenuItem value="100"> Within 100 miles </MenuItem>
          </Select>
        </InputLabel>
        <Button variant="contained" onClick={fetchFilteredListing}>
          {" "}
          Apply Filters{" "}
        </Button>
      </FilterRow>
    </>
  );
}

export default FilterFunctions;

const FilterRow = styled(Row)`
  justify-content: space-evenly;
`;
