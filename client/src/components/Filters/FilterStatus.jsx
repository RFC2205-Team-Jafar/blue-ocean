import React, { useState, useContext } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

function FilterStatus() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const fetchApplied = () => {
    axios.get(`jobs/:uuid/applied`).then((res) => {
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
