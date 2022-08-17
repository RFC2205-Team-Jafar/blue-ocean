/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Column, Label, Row } from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function Post({ handleClick }) {
  /*----- STATE HOOKS -----*/
  // const [] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/

  /*----- RENDERER -----*/
  return (
    <JobPosting onClick={ handleClick }>
      <h3>Job Title</h3>
      <h4>Job Location</h4>
      <p>
        Job Description:
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum . . .
      </p>
    </JobPosting>
  )
}




/*========== STYLES ==========*/
const JobPosting = styled(Column)`
  background-color: #fff;
  border: solid thin transparent;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    border: solid thin #000;
  }
`;