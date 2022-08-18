/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

/*========== INTERNAL MODULES ==========*/
import { Column, Label, Row, JobPosting } from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function Post({ job, handleClick }) {
  console.log(job);
  /*----- STATE HOOKS -----*/
  // const [] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/

  /*----- RENDERER -----*/
  return (
    <JobPosting onClick={ handleClick }>
      <JobTitle>Job Title</JobTitle>
      <JobLocation>Job Location</JobLocation>
      <JobSalary>SALARY</JobSalary>
      <JobDescription>Job Description:</JobDescription>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum . . .
      </p>
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