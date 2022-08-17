/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Column, Label, Row, ButtonTray } from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function ActiveJob({ handleClick }) {
  /*----- STATE HOOKS -----*/
  // const [] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/


  /*----- RENDER METHODS -----*/

  /*----- RENDERER -----*/
  return (
    <JobPosting onClick={ handleClick }>
      <PostingHeader>
        <PostingName>Job Title</PostingName>
        <PostingLocation>Job Location</PostingLocation>
        <ButtonTray>
          <Button>Close Posting</Button>
          <Button>Remove Posting</Button>
        </ButtonTray>
      </PostingHeader>
      <PostingBody>
        <p>
          Job Description:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum . . .
        </p>
      </PostingBody>
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

/*========== STYLES ==========*/
const PostingHeader = styled(Column)`

`;

const ApplicantButton = styled(Button)({
  borderColor:'#f44336',
  color:'#f44336',
  '&:hover': {
    color: '#fff',
    backgroundColor:'#f44336',
    borderColor:'#f44336',
  },
});

const PostingName = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 16pt;
  font-weight: bold;
`;

const PostingLocation = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  font-size: 12pt;
`;

const PostingBody = styled(Column)`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  /* height: 800px; */
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PostingContent = styled(Row)`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
  width: 100%;
  font-weight: bold;
  font-size: 12pt;
`;