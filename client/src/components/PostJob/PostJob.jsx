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
        // alert('Minimum Salary must be within 20% of Maximum Salary')
        return
      }
    }
    // geoConverter(jobPosting.zipcode);
    /*
    TODO:
    - add conversion to Laat and long
     - attach Lat and Long to state as coord_lat and coord_long
     - remove zipcode property from state object
     */
    if (jobPosting.employment_type && jobPosting.employment_type === 'remote') {
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

    setPostSuccess(true);
    setTimeout(() => setPostSuccess(false), 3000);
  };



  /*----- RENDER METHODS -----*/
  const renderCompany = () => {
    return (
      <Label>Company Name
        <Input
          type='text'
          placeholder='Company Name'
          name='company'
          onChange={handleChange}
          >
        </Input>
      </Label>
    )
  }

  const renderLocation = () => {
    return (
    <Label>Job Location
      <Label>Company Zipcode
        <Input
          type='text'
          placeholder='90210'
          name='zipcode'
          onChange={handleChange}
          >
        </Input>
      </Label>
        <ButtonGroup>
          <Button value='inPerson' name='job_type' onClick={handleClick}>In Person</Button>
          <Button value='hybrid' name='job_type' onClick={handleClick}>Hybrid</Button>
          <Button value='remote' name='job_type' onClick={handleClick}>Remote</Button>
          <Button value='onTheRoad' name='job_type' onClick={handleClick}>On the Road</Button>
        </ButtonGroup>
      </Label>
    )
  }

  const renderIndustry = () => {
    return (
      <Label>Job Industry
        <Input
          type='text'
          placeholder='Technology'
          name='industry'
          onChange={handleChange}
          >
        </Input>
      </Label>
    )
  }

  const renderJobTitle = () => {
    return (
      <Label>Job Title
        <Input
          type='text'
          placeholder='Mad Scientist'
          name='title'
          onChange={handleChange}
          >
        </Input>
      </Label>
    )
  }

  const renderSalary = () => {
    return (
      <Label>Salary Range
      <Label>Salary Start
        <Input
          type='number'
          placeholder='80000'
          name='salary_low'
          onChange={handleChange}
          >
        </Input>
      </Label>
      <Label>Salary End
        <Input
          type='number'
          placeholder='100000'
          name='salary_high'
          onChange={handleChange}
          >
        </Input>
      </Label>
    </Label>
    )
  }

const renderPayRate = () => {
  return (
    <Label>Pay Rate
      <ButtonGroup>
        <Button value='hour' name='pay_adjuster' onClick={handleClick}>per hour</Button>
        <Button value='day' name='pay_adjuster' onClick={handleClick}>per day</Button>
        <Button value='week' name='pay_adjuster' onClick={handleClick}>per week</Button>
        <Button value='month' name='pay_adjuster' onClick={handleClick}>per month</Button>
        <Button value='year' name='pay_adjuster' onClick={handleClick}>per year</Button>
      </ButtonGroup>
    </Label>
  )
}

const renderDescription = () => {
  return (
    <Label>Description
      <Input
        type='text'
        placeholder='We are an awesome company looking to add someone amazing to our team . . .'
        name='description'
        onChange={handleChange}
        >
      </Input>
    </Label>
  )
}

  const renderKeywords = () => {
  return (
    <Label>Requested Keywords
      <Input
        type='text'
        placeholder='chemisty, science, scientist, experiment'
        name='keywords'
        onChange={handleKeyWords}
        >
      </Input>
      <p
        sx={{color:'grey'}}
        >comma delimited
      </p>
    </Label>
  )
}

const renderAvailablePositions = () => {
  return (
    <Label>Number of Available Positions
      <Input
        type='number'
        placeholder='1'
        name='num_positions'
        onChange={handleChange}
        >
      </Input>
    </Label>
  )
}

const renderJobType = () => {
  return (
    <Label>Job Type
      <ButtonGroup>
        <Button value='Full Time' name='employment_type' onClick={handleClick}>Full Time</Button>
        <Button value='Part Time' name='employment_type' onClick={handleClick}>Part Time</Button>
        <Button value='Contract' name='employment_type' onClick={handleClick}>Contract</Button>
        <Button value='Temp Position' name='employment_type' onClick={handleClick}>Temp Position</Button>
        <Button value='Seasonal' name='employment_type' onClick={handleClick}>Seasonal</Button>
        <Button value='Internship' name='employment_type' onClick={handleClick}>Internship</Button>
      </ButtonGroup>
    </Label>
  )
}

const renderShiftSchedule = () => {
  return (
    <Label>Shift Schedule
      <ButtonGroup>
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
      </ButtonGroup>
    </Label>
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
      {renderJobTitle()}
      {renderSalaryError()}
      {renderSalary()}
      {renderPayRate()}
      {renderDescription()}
      {renderKeywords()}
      {renderAvailablePositions()}
      {renderJobType()}
      {renderShiftSchedule()}
      {renderPostJob()}
    </Form>
  )
}




/*========== STYLES ==========*/