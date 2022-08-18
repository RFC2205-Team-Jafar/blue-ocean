/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Row, FeedSection, Column } from '../../../public/stylesheets/styles.js';
import PostList from './PostList.jsx';
import DetailList from './DetailList.jsx';


/*========== EXPORTS ==========*/
export default function Feed({view, applicants}) {
  /*
  TODO: send children to be rendered to the function as props along with an
  identifier to indicate that it is on the job seeker or the recruiters page
  */

  /*----- STATE HOOKS -----*/
  const [postings, setPostings] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const [targetPost, setTargetPost] = useState();


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
    if (view && view.view !== 'unsigned') {
      return (
        <DetailList targetPost={targetPost} postings={postings} view={view} applicants={applicants}/>
      )
    }
  }


  /*----- RENDERER -----*/
  return (
    <Column style={{justifyContent: 'center', width:'100vw'}}>
      <HeaderDivider></HeaderDivider>
      <FeedHeader>YOUR FEED</FeedHeader>
      <FeedSection>
          {/* <Row>
            <h4 style={{padding-left: '5px'}}>Check out these opportunities</h4>
          </Row> */}
            {/* <h4 style={{paddingLeft: '5px'}}>Jobs based on your criteria</h4> */}
          <Row>
            <PostList handleClick={handleClick} postings={postings} view={view} />
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
  width: 100vw;
  height: 0.1em;
  margin: 5px;
  background: linear-gradient(50deg, rgba(119, 201, 212, 0.75), rgba(87, 188, 144, 0.75));
`