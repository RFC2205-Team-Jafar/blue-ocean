import React, { Component } from "react";
import axios from "axios";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function valuetext(value) {
  return `${value}`;
}

export default function SalarySliderSteps() {
  return (
    <Box sx={{ width: 200, color: "green" }}>
      <Slider
        aria-label="Small steps"
        defaultValue={10}
        getAriaValueText={valuetext}
        step={5}
        min={10}
        max={250}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
