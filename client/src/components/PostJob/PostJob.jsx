/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import { Form, Label, Row, Input, ButtonGroup } from '../../../public/stylesheets/styles.js';
import geoConverter from '../../Google_API/geolocation.jsx'


/*========== EXPORTS ==========*/
export default function PostJob() {

  /*----- STATE HOOKS -----*/
  const [jobPosting, setJobPosting] = useState({ recruiter_uuid: 'rxXyEEJqImavbPtUBHrINcvIK5p2' });
  const [keywords, setKeywords] = useState([]);
  const [zipCode, setZipCode] = useState();
  const [salaryPass, setSalaryPass] = useState(true);
  const [postSuccess, setPostSuccess] = useState(false);


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleChange = ({ target: { name, value } }) => {
    setJobPosting(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handleKeyWords = ({ target: { value } }) => {
    setKeywords(value)
  };

  const handleClick = ({ target: { name, value } }) => {
    //TODO: set modify the background of the clicked button to be a different color
    setJobPosting(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handlePostJob = () => {
    event.preventDefault();
    if (jobPosting) {
      if (jobPosting.salary_low < (jobPosting.salary_high * .8)) {
        setSalaryPass(false);
        setTimeout(() => setSalaryPass(true), 3000);
        return
      }
    }

    if (jobPosting.job_type && jobPosting.job_type === 'remote') {
      setJobPosting(prev => ({
        ...prev,
        isRemote: true
      }))
    } else {
      setJobPosting(prev => ({
        ...prev,
        isRemote: false
      }))
    }

    if (keywords) {
      setJobPosting(prev => ({
        ...prev,
        requested_keywords: keywords
      }))
    }

    if (jobPosting.zipcode) {
      const zipcode = Number(jobPosting.zipcode)
      geoConverter(zipcode)
      .then(latLong => setJobPosting(prev => ({
        ...prev,
        coord_lat: latLong.lat,
        coord_long: latLong.lng
      })))
      .then(merge => axios.post('/jobs/addajob', jobPosting))
      .then(success => {
        setPostSuccess(true);
        setTimeout(() => setPostSuccess(false), 3000);
      })
      .catch(err => console.error(err))
    }
  };



  /*----- RENDER METHODS -----*/
  const renderCompany = () => {
    return (
      <Title>Company Name
        <Input
          type='text'
          placeholder='Company Name'
          name='company'
          onChange={handleChange}
          >
        </Input>
      </Title>
    )
  }

  const renderLocation = () => {
    return (
    <Title>Job Location
      <Title>Company Zipcode
        <Input
          type='text'
          placeholder='10001'
          name='zipcode'
          onChange={handleChange}
          >
        </Input>
      </Title>
        <ButtonGroup>
          <Button value='inPerson' name='job_type' onClick={handleClick}>In Person</Button>
          <Button value='hybrid' name='job_type' onClick={handleClick}>Hybrid</Button>
          <Button value='remote' name='job_type' onClick={handleClick}>Remote</Button>
          <Button value='onTheRoad' name='job_type' onClick={handleClick}>On the Road</Button>
        </ButtonGroup>
      </Title>
    )
  }

  const renderIndustry = () => {
    return (
      <Title>Job Industry
        <IndustryButtonBox>
          <Button value='Art' name='industry' onClick={handleClick}>Art</Button>
          <Button value='Aviation' name='industry' onClick={handleClick}>Aviation</Button>
          <Button value='Construction' name='industry' onClick={handleClick}>Construction</Button>
          <Button value='Education' name='industry' onClick={handleClick}>Education</Button>
          <Button value='Food' name='industry' onClick={handleClick}>Food</Button>
          <Button value='Healthcare' name='industry' onClick={handleClick}>Healthcare</Button>
          <Button value='Music' name='industry' onClick={handleClick}>Music</Button>
          <Button value='Tech' name='industry' onClick={handleClick}>Tech</Button>
          <Button value='Transportation' name='industry' onClick={handleClick}>Transportation</Button>
        </IndustryButtonBox>
      </Title>
    )
  }

  const renderJobTitle = () => {
    return (
      <Title>Job Title
        <Input
          type='text'
          placeholder='Mad Scientist'
          name='title'
          onChange={handleChange}
          >
        </Input>
      </Title>
    )
  }

  const renderSalary = () => {
    return (
      <Title>Salary Range
        <Row>
          <Salary>Salary Start
            <Input
              type='number'
              placeholder='80000'
              name='salary_low'
              onChange={handleChange}
              >
            </Input>
          </Salary>
          <Salary>Salary End
            <Input
              type='number'
              placeholder='100000'
              name='salary_high'
              onChange={handleChange}
              >
            </Input>
          </Salary>
        </Row>
    </Title>
    )
  }

const renderPayRate = () => {
  return (
    <Title>Pay Rate
      <ButtonGroup>
        <Button value='hour' name='pay_adjuster' onClick={handleClick}>per hour</Button>
        <Button value='day' name='pay_adjuster' onClick={handleClick}>per day</Button>
        <Button value='week' name='pay_adjuster' onClick={handleClick}>per week</Button>
        <Button value='month' name='pay_adjuster' onClick={handleClick}>per month</Button>
        <Button value='year' name='pay_adjuster' onClick={handleClick}>per year</Button>
      </ButtonGroup>
    </Title>
  )
}

const renderDescription = () => {
  return (
    <Title>Description
      <TextArea
        type='textbox'
        placeholder='We are an awesome company looking to add someone amazing to our team . . .'
        name='description'
        onChange={handleChange}
        >
      </TextArea>
    </Title>
  )
}

  const renderKeywords = () => {
  return (
    <Title>Requested Keywords
      <TextArea
        type='text'
        placeholder='chemisty, science, scientist, experiment'
        name='keywords'
        onChange={handleKeyWords}
        >
      </TextArea>
      <Caption>comma delimited</Caption>
    </Title>
  )
}

const renderAvailablePositions = () => {
  return (
    <Title>Number of Available Positions
      <Input
        type='number'
        placeholder='1'
        name='num_positions'
        onChange={handleChange}
        >
      </Input>
    </Title>
  )
}

const renderJobType = () => {
  return (
    <Title>Job Type
      <IndustryButtonBox>
        <Button value='Full Time' name='employment_type' onClick={handleClick}>Full Time</Button>
        <Button value='Part Time' name='employment_type' onClick={handleClick}>Part Time</Button>
        <Button value='Contract' name='employment_type' onClick={handleClick}>Contract</Button>
        <Button value='Temp Position' name='employment_type' onClick={handleClick}>Temp Position</Button>
        <Button value='Seasonal' name='employment_type' onClick={handleClick}>Seasonal</Button>
        <Button value='Internship' name='employment_type' onClick={handleClick}>Internship</Button>
      </IndustryButtonBox>
    </Title>
  )
}

const renderShiftSchedule = () => {
  return (
    <Title>Shift Schedule
      <ButtonBox>
        <Button value='4hourShift' name='shift_schedule' onClick={handleClick}>4 hour shift</Button>
        <Button value='8hourShift' name='shift_schedule' onClick={handleClick}>8 hour shift</Button>
        <Button value='10hourShift' name='shift_schedule' onClick={handleClick}>10 hour shift</Button>
        <Button value='12hourShift' name='shift_schedule' onClick={handleClick}>12 hour shift</Button>
        <Button value='3x12' name='shift_schedule' onClick={handleClick}>3 x 12 hour shifts</Button>
        <Button value='4x10' name='shift_schedule' onClick={handleClick}>4 x 10 hour shifts</Button>
        <Button value='4x12' name='shift_schedule' onClick={handleClick}>4 x 12 hour shifts</Button>
        <Button value='5x8' name='shift_schedule' onClick={handleClick}>5 x 8 hour shifts</Button>
        <Button value='mondayToFriday' name='shift_schedule' onClick={handleClick}>Monday to Friday</Button>
        <Button value='dayShift' name='shift_schedule' onClick={handleClick}>Day Shift</Button>
        <Button value='nightShift' name='shift_schedule' onClick={handleClick}>Night Shift</Button>
        <Button value='eveningShift' name='shift_schedule' onClick={handleClick}>Evening Shift</Button>
        <Button value='noNights' name='shift_schedule' onClick={handleClick}>No Nights</Button>
        <Button value='overNights' name='shift_schedule' onClick={handleClick}>Overnights</Button>
        <Button value='weekendNights' name='shift_schedule' onClick={handleClick}>Weekend Nights</Button>
        <Button value='weekendOnly' name='shift_schedule' onClick={handleClick}>Weekends Only</Button>
        <Button value='noWeekend' name='shift_schedule' onClick={handleClick}>No Weekends</Button>
        <Button value='onCall'name='shift_schedule' onClick={handleClick}>On Call</Button>
        <Button value='holiday' name='shift_schedule' onClick={handleClick}>Holidays Only</Button>
        <Button value='selfSchedule' name='shift_schedule' onClick={handleClick}>Self-Determined Schedule</Button>
        <Button value='afterSchool' name='shift_schedule' onClick={handleClick}>After School</Button>
        <Button value='overtime' name='shift_schedule' onClick={handleClick}>Overtime</Button>
        <Button value='other' name='shift_schedule' onClick={handleClick}>Other</Button>
        <Button value='' name='shift_schedule' onClick={handleClick}>clear</Button>
      </ButtonBox>
    </Title>
  )
}

const renderPostJob = () => {
  return (
    <Row>
      <Button variant='contained' onClick={handlePostJob}>POST</Button>
    </Row>
  )
}

const renderSalaryError = () => {
  if (!salaryPass) {
    return (
      <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
        Minimum Salary must be within <strong>20%</strong> of Maximum Salary
      </Alert>
    )
  }
}

const renderJobPosted = () => {
  if (postSuccess) {
    return (
      <Alert severity='success'>
        <AlertTitle>Success</AlertTitle>
        Your job has been posted!
      </Alert>
    )
  }
}

/*----- RENDERER -----*/
  return (
    <Form>
      {renderJobPosted()}
      <Row>
        <h1>Post a Job</h1>
      </Row>
      {renderCompany()}
      {renderLocation()}
      {renderIndustry()}
      {renderJobType()}
      {renderJobTitle()}
      {renderSalary()}
      {renderSalaryError()}
      {renderPayRate()}
      {renderDescription()}
      {renderKeywords()}
      {renderAvailablePositions()}
      {renderShiftSchedule()}
      {renderPostJob()}
    </Form>
  )
}




/*========== STYLES ==========*/
const Title = styled(Label)`
  margin-top: 20px;
  font-weight: bold;
  font-size: 14pt;
`;

const Salary = styled(Label)`
  /* margin-top: 20px; */
  font-weight: bold;
  font-size: 10pt;
`;

const TextArea = styled.textarea`
  border: solid;
  border-width: thin;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
  font-size: 12pt;
  font-weight: light;
  background-color: transparent;
  width: 50em;
  padding: 2px;
  margin: 10px;
`;

const Caption = styled.p`
  font-weight: light;
  margin-top: -10px;
  font-size: 8pt;
`;

const ButtonBox = styled(ButtonGroup)`
  width: 48em;
`;
const IndustryButtonBox = styled(ButtonGroup)`
  width: 15em;
`;