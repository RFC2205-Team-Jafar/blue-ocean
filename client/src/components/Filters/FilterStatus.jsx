import React, { useState, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { AllContext } from "../../index.jsx";

function FilterStatus() {
  // const [appliedJobs, setAppliedJobs] = useState([]);
  // const { uuid } = useContext(AllContext);
  const { uuid } = useContext(AllContext);
  const { currentList, setCurrentList } = useContext(AllContext);
  // const fetchApplied = () => {
  //   axios.get(`jobs/${uuid}/applied`).then((res) => {
  //     setAppliedJobs(res.data);
  //   });
  // };
  const handleClick = () => {
    if (currentList === 'default') {
      setCurrentList('applied');
    } else if (currentList === 'applied') {
      setCurrentList('default')
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={() => handleClick()}>
        { currentList === 'default' ? " Applied Jobs " : " Jobs for You "}
      </Button>
    </React.Fragment>
  );
}

export default FilterStatus;
