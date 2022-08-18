import React, { useState } from "react";
import axios from "axios";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

function valuetext(value) {
  return `${value}`;
}

export default function SalarySliderSteps() {
  const [sliderValue, setSliderValue] = useState(0);

  const handleValue = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <Box sx={{ width: 200, color: "green" }}>
      <Slider
        track="inverted"
        onChange={handleValue}
        value={event.target.value}
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
