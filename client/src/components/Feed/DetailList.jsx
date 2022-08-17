/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Column, Row, ButtonTray } from '../../../public/stylesheets/styles.js';
import DetailItem from './DetailItem.jsx';


/*========== EXPORTS ==========*/
export default function DetailList({ displayPost, postings, view: { view }, applicants }) {
  /*
  TODO: send children to be rendered to the function as props along with an
  identifier to indicate that it is on the job seeker or the recruiters page
  */

  /*----- STATE HOOKS -----*/
  // const [] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  // const handleChange = ({target: {name, value}}) => {
  //   setJobPosting(prev => ({
  //     ...prev,
  //     [name]: value
  //   }))
  // };

  /*----- RENDER METHODS -----*/

  const renderDetail = (targetPost) => {
    /*
    NOTE:
    - on page load, renders detailed information on the first listing,
    - should conditionally render buttons specific to the parent page
    */
   targetPost = targetPost || postings[0];

    if (targetPost && view === 'seeker') {
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
          <ButtonTray>
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
          </ButtonTray>
        </Column>
      )
    }

    if (applicants && view === "recruiter") {
      return applicants.map(applicant => {
        return <DetailItem applicant={applicant}/>
    })
    }
  }


/*----- RENDERER -----*/
return (
  <DetailSection>
    {renderDetail()}
  </DetailSection>
  )
}




/*========== STYLES ==========*/
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