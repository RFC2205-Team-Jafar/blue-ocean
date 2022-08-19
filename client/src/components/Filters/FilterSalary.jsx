import React, { useState } from "react";
import axios from "axios";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

export default function SalarySliderSteps({ handleSalary }) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <Box sx={{ width: 200, color: "green" }}>
      <InputLabel> Minimum Yearly Salary</InputLabel>
      <Slider
        track="inverted"
        onChange={handleSalary}
        aria-label="Small steps"
        defaultValue={10}
        step={5 * 1000}
        min={10 * 1000}
        max={250 * 1000}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
