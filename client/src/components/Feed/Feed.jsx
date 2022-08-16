/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import {Container, Column, Label, Row, Input, FeedSection} from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function Feed() {
  /*
  TODO: send children to be rendered to the function as props along with an
  identifier to indicate that it is on the job seeker or the recruiters page
  */

  /*----- STATE HOOKS -----*/
  const [postings, setPostings] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleChange = ({target: {name, value}}) => {
    setJobPosting(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleClick = ({target: {name, value}}) => {
    //TODO: set modify the background of the clicked button to be a different color
    setJobPosting(prev => ({
      ...prev,
      [name]: value
    }))
  };




  /*----- RENDER METHODS -----*/
  const renderList = () => {
    /*
    NOTE:
    - should render the basic information from the provided List prop,
    - should conditionally render buttons specific to the parent page
    - on Click -> sends the clicked posting information to the Details listing
    */
    if (postings) {
      return postings.map(post => {
        return (
          <JobPosting>
              <h3>Job Title</h3>
              <h4>Job Location</h4>
              <p>
                Job Description:
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum . . .
              </p>
          </JobPosting>
        )
      })
    }
  }

  const renderDetail = (targetPost) => {
    /*
    NOTE:
    - on page load, renders detailed information on the first listing,
    - should conditionally render buttons specific to the parent page
    */
    targetPost = targetPost || postings[0];

    if (targetPost) {
      return (
        <Column
          style={{alignItems: 'flex-start'}}
          >
          <h3>Job Title</h3>
          <h4>Job Location</h4>
          <p>
            Job Description:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor. Et magnis dis parturient montes nascetur. Lectus proin nibh nisl condimentum id. Nunc consequat interdum varius sit. Laoreet suspendisse interdum consectetur libero id faucibus. Platea dictumst quisque sagittis purus sit. Felis bibendum ut tristique et egestas quis. Scelerisque mauris pellentesque pulvinar pellentesque. Luctus accumsan tortor posuere ac ut consequat semper. Vitae aliquet nec ullamcorper sit amet risus nullam. At varius vel pharetra vel. Faucibus scelerisque eleifend donec pretium vulputate. Venenatis a condimentum vitae sapien pellentesque. Mauris augue neque gravida in fermentum. Velit egestas dui id ornare arcu odio ut sem nulla.

            Aliquam etiam erat velit scelerisque in dictum. Aenean pharetra magna ac placerat vestibulum. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Vulputate ut pharetra sit amet aliquam id. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Mi bibendum neque egestas congue quisque egestas diam in arcu. Pellentesque elit ullamcorper dignissim cras tincidunt. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Etiam tempor orci eu lobortis elementum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Morbi tempus iaculis urna id volutpat lacus laoreet. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Vitae sapien pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt augue interdum velit euismod. Vel pretium lectus quam id leo in vitae turpis massa. Semper quis lectus nulla at volutpat. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Tellus in metus vulputate eu scelerisque felis imperdiet. Sit amet nisl purus in.

            Morbi tincidunt augue interdum velit. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. In eu mi bibendum neque egestas. Erat pellentesque adipiscing commodo elit at imperdiet dui. Massa tincidunt nunc pulvinar sapien et ligula. Platea dictumst quisque sagittis purus sit amet volutpat. Quam quisque id diam vel quam elementum pulvinar etiam non. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Ipsum nunc aliquet bibendum enim facilisis. Ullamcorper sit amet risus nullam eget felis eget nunc. Ac feugiat sed lectus vestibulum mattis ullamcorper. Morbi tristique senectus et netus et malesuada fames ac turpis. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Lectus urna duis convallis convallis.
          </p>
          <Row>
            <Button
              variant='contained'
              sx={{
                transform: 'scale(.75)'
              }}
              >+ Cover Letter
            </Button>
            <Button
              variant='contained'
              >Apply
            </Button>
          </Row>
        </Column>
      )
    }
  }


/*----- RENDERER -----*/
return (
  <FeedSection>
      <Row>
        <h3 style={{padding: '10px'}}>This is the Job Feed Section</h3>
      </Row>
      <Row>
        <ListSection>
          {renderList()}
        </ListSection>
        <DetailSection>
          {renderDetail()}
        </DetailSection>
      </Row>
    </FeedSection>
  )
}




/*========== STYLES ==========*/
const ListSection = styled(Column)`
  margin: 10px;
  width: 48%;
  height: 800px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const JobPosting = styled(Column)`
  background-color: #fff;
  border: solid thin transparent;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    border: solid thin #000;
    /* border-width: thin;
    border-color: #000; */
  }
`;

const DetailSection = styled(Column)`
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 48%;
  height: 800px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;