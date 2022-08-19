import React, { useState, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { AllContext } from "../../index.jsx";

function FilterStatus() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const { uuid } = useContext(AllContext);

  const fetchApplied = () => {
    axios.get(`jobs/${uuid}/applied`).then((res) => {
      setAppliedJobs(res.data);
    });
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={fetchApplied}>
        {" "}
        Applied Jobs{" "}
      </Button>
    </React.Fragment>
  );
}

export default FilterStatus;
