/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Row, FeedSection, Column } from '../../../public/stylesheets/styles.js';
import {AllContext} from '../../index.jsx'
import PostList from './PostList.jsx';
import DetailList from './DetailList.jsx';
import FilterFunctions from '../Filters/FilterFunctions.jsx'

/*========== EXPORTS ==========*/
export default function Feed() {
  /*
  TODO: send children to be rendered to the function as props along with an
  identifier to indicate that it is on the job seeker or the recruiters page
  */

/**
 NOTE:
 applied Jobs
 default Jobs
 */

  /*----- STATE HOOKS -----*/
  const [postings, setPostings] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const [targetPost, setTargetPost] = useState();
  const { accountType, defaultJobs, appliedJobs } = useContext(AllContext);

  const path = location.pathname;
  // const { accountType, defaultJobs, appliedJobs, location, uuid, email, firstName, lastName, preferredIndustry, zipCode, company, coord_lat, coord_long, resumeUrl, coverLetterUrl } = useContext(AllContext);

  // console.log('AllContext: ', AllContext);
  // console.log('accountType: ', accountType);
  // console.log('defaultJobs: ', defaultJobs);
  // console.log('appliedJobs: ', appliedJobs);
  // console.log('location: ', location);
  // console.log('uuid: ', uuid);
  // console.log('email: ', email);
  // console.log('firstName: ', firstName);
  // console.log('lastName: ', lastName);
  // console.log('preferredIndustry: ', preferredIndustry);
  // console.log('zipCode: ', zipCode);
  // console.log('company: ', company);
  // console.log('coord_lat: ', coord_lat);
  // console.log('coord_long: ', coord_long);
  // console.log('resumeUrl: ', resumeUrl);
  // console.log('coverLetterUrl: ', coverLetterUrl);

  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleClick = ({ target: { name, value } }) => {
    //TODO: set modify the background of the clicked button to be a different color
    setTargetPost(prev => ({
      ...prev,
      [name]: value
    }))

  };


  /*----- RENDER METHODS -----*/
  const renderDetail = () => {
    if (path && path !== '/') {
      return (
        <DetailList targetPost={targetPost} postings={postings} defaultJobs={defaultJobs} appliedJobs={appliedJobs} />
      )
    }
  }


  /*----- RENDERER -----*/
  return (
    <Column style={{justifyContent: 'center', width:'100vw'}}>
      {accountType === 'seeker' && <FilterFunctions />}
      <HeaderDivider></HeaderDivider>
      <FeedHeader>YOUR FEED</FeedHeader>
      <FeedSection>

        {/* <Row>
          <h3 style={{padding: '10px'}}>This is the Job Feed Section</h3>
        </Row> */}
        <Row>
          <PostList handleClick={handleClick} postings={postings} defaultJobs={defaultJobs} appliedJobs={appliedJobs}/>
          {renderDetail()}
        </Row>
      </FeedSection>
    </Column>
  )
}



/*========== STYLES ==========*/

const FeedHeader = styled(Row)`
  width: 100vw;
  padding: 5px;
  align-items: flex-end;
  font-size: 14pt;
  font-weight: bold;
  justify-content: center;
`;

const HeaderDivider = styled(Row)`
  width: 95vw;
  height: 0.1em;
  margin: 5px;
  justify-content: center;
  background: linear-gradient(50deg, rgba(119, 201, 212, 0.75), rgba(87, 188, 144, 0.75));
`