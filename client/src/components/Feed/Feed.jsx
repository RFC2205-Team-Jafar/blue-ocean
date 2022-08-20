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

  /*----- STATE HOOKS -----*/
  const [postings, setPostings] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const [targetPost, setTargetPost] = useState();
  const [targetListing, setTargetListing] = useState();
  const { accountType, defaultJobs, appliedJobs, unsignedJobs, recruiterPostings } = useContext(AllContext);
  const {currentList, setCurrentList} = useContext(AllContext);

  const path = location.pathname;

  /*----- LIFESTYLE METHODS -----*/
  useEffect(() =>  {
    if (currentList === 'default' && defaultJobs) {
      setTargetPost(defaultJobs[0]);
    } else if (currentList === 'applied' && appliedJobs) {
      setTargetPost(appliedJobs[0]);
    }
  }, [currentList]);

  /*----- EVENT HANDLERS -----*/
  const handleClick = (job) => {
    //TODO: set modify the background of the clicked button to be a different color
    setTargetPost(job);
  };

  const handleListing = (listing) => {
    setTargetListing(listing);
  }


  /*----- RENDER METHODS -----*/
  const renderDetail = () => {
    if (path && path !== '/') {
      return (
        <DetailList targetPost={targetPost} targetListing={targetListing} recruiterPostings={recruiterPostings} defaultJobs={defaultJobs} appliedJobs={appliedJobs} unsignedJobs={unsignedJobs} />
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
        <Row>
          <PostList handleClick={handleClick} handleListing={handleListing} recruiterPostings={recruiterPostings} unsignedJobs={unsignedJobs} defaultJobs={defaultJobs} appliedJobs={appliedJobs}/>
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