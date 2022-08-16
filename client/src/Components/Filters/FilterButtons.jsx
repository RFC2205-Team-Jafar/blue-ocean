import React, { Component } from "react";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}
function FilterButtons(props) {
  const [value, setValue] = React.useState([0, 250]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Slider
        style={{ width: 250 }}
        getAriaLabel={() => "Salary"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      ></Slider>
      <label>
        {" "}
        Industry:
        <select>
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
        <select>
          <option value="select"> Select </option>
          <option value="Remote"> Remote </option>
          <option value="On-Site"> On-Site </option>
        </select>
      </label>
      <label>
        {" "}
        Employment Type:
        <select>
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
        Location:
        <select>
          <option value="select"> Select </option>
          <option value="10mi"> Within 10 miles </option>
          <option value="15mi"> Within 15 miles </option>
          <option value="25mi"> Within 25 miles </option>
          <option value="50mi"> Within 50 miles</option>
          <option value="100mi"> Within 100 miles </option>
        </select>
      </label>
      <button> Applied Jobs </button>
    </React.Fragment>
  );
}

export default FilterButtons;
