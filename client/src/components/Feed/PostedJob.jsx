/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { Column, Label, Row, JobPosting } from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function Post({ job, handleClick }) {

  if (job) {
    var { title, salary_low, salary_high, pay_adjuster, desc, industry, listing_id } = job;
  }
  /*----- STATE HOOKS -----*/
  // const [] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/

  /*----- RENDERER -----*/
  return (
    <JobPosting onClick={() => handleClick(job)}>
      <JobTitle>{title}</JobTitle>
      <JobLocation>{industry}</JobLocation>
      <JobSalary>${salary_low} to ${salary_high} a {pay_adjuster}</JobSalary>
      <JobDescription>Job Description:</JobDescription>
        <p>{desc}</p>
    </JobPosting>
  )
}




/*========== STYLES ==========*/
const JobTitle = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 16pt;
  font-weight: bold;
`;

const JobLocation = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 12pt;
`;

const JobSalary = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 10pt;
`;

const JobDescription = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  font-weight: bold;
  font-size: 12pt;
`;