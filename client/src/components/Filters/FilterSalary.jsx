import React, { useState } from "react";
import axios from "axios";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

export default function SalarySliderSteps({ handleSalary }) {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <Box sx={{ width: 200, color: "green" }}>
      <Slider
        track="inverted"
        onChange={handleSalary}
        aria-label="Small steps"
        defaultValue={10}
        step={5}
        min={10}
        max={250}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
