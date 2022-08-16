/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import axios from 'axios';

/*========== INTERNAL MODULES ==========*/
import {Form, Label, Row, Input, ButtonGroup} from '../../../public/stylesheets/styles.js';
import geoConverter from '../../Google_API/geolocation.jsx'


/*========== EXPORTS ==========*/
export default function PostJob() {

  /*----- STATE HOOKS -----*/
  const [jobPosting, setJobPosting] = useState({});
  const [zipCode, setZipCode] = useState();


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
    // set modify the background of the clicked button to be a different color
    setJobPosting(prev => ({
      ...prev,
      [name]: value
    }))
  };

  const handlePostJob = () => {
    event.preventDefault();
    if (jobPosting) {
      if (jobPosting.salaryStart < (jobPosting.salaryEnd * .8)) {
        alert('Minimum Salary must be within 20% of Maximum Salary')
        return
      }
    }
    // geoConverter(jobPosting.zipcode);
    alert('Job Posted');
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
          <Button value='inPerson' name='jobLocation' onClick={handleClick}>In Person</Button>
          <Button value='hybrid' name='jobLocation' onClick={handleClick}>Hybrid</Button>
          <Button value='remote' name='jobLocation' onClick={handleClick}>Remote</Button>
          <Button value='onTheRoad' name='jobLocation' onClick={handleClick}>On the Road</Button>
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
          name='jobIndustry'
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
          name='jobTitle'
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
          placeholder='0'
          name='salaryStart'
          onChange={handleChange}
          >
        </Input>
      </Label>
      <Label>Salary End
        <Input
          type='number'
          placeholder='100000'
          name='salaryEnd'
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
        <Button value='hourly' name='payRate' onClick={handleClick}>per hour</Button>
        <Button value='daily' name='payRate' onClick={handleClick}>per day</Button>
        <Button value='weekly' name='payRate' onClick={handleClick}>per week</Button>
        <Button value='monthly' name='payRate' onClick={handleClick}>per month</Button>
        <Button value='yearly' name='payRate' onClick={handleClick}>per year</Button>
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
        name='jobDesc'
        onChange={handleChange}
        >
      </Input>
    </Label>
  )
}

const renderAvailablePositions = () => {
  return (
    <Label>Number of Available Positions
      <Input
        type='number'
        placeholder='1'
        name='availablePositions'
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
        <Button value='fullTime' name='jobType' onClick={handleClick}>Full Time</Button>
        <Button value='partTime' name='jobType' onClick={handleClick}>Part Time</Button>
        <Button value='contract' name='jobType' onClick={handleClick}>Contract</Button>
        <Button value='temp' name='jobType' onClick={handleClick}>Temp Position</Button>
        <Button value='seasonal' name='jobType' onClick={handleClick}>Seasonal</Button>
        <Button value='internship' name='jobType' onClick={handleClick}>Internship</Button>
      </ButtonGroup>
    </Label>
  )
}

const renderShiftSchedule = () => {
  return (
    <Label>Shift Schedule
      <ButtonGroup>
        <Button value='4hourShift' name='shiftSchedule' onClick={handleClick}>4 hour shift</Button>
        <Button value='8hourShift' name='shiftSchedule' onClick={handleClick}>8 hour shift</Button>
        <Button value='10hourShift' name='shiftSchedule' onClick={handleClick}>10 hour shift</Button>
        <Button value='12hourShift' name='shiftSchedule' onClick={handleClick}>12 hour shift</Button>
        <Button value='3x12' name='shiftSchedule' onClick={handleClick}>3 x 12 hour shifts</Button>
        <Button value='4x10' name='shiftSchedule' onClick={handleClick}>4 x 10 hour shifts</Button>
        <Button value='4x12' name='shiftSchedule' onClick={handleClick}>4 x 12 hour shifts</Button>
        <Button value='5x8' name='shiftSchedule' onClick={handleClick}>5 x 8 hour shifts</Button>
        <Button value='mondayToFriday' name='shiftSchedule' onClick={handleClick}>Monday to Friday</Button>
        <Button value='dayShift' name='shiftSchedule' onClick={handleClick}>Day Shift</Button>
        <Button value='nightShift' name='shiftSchedule' onClick={handleClick}>Night Shift</Button>
        <Button value='eveningShift' name='shiftSchedule' onClick={handleClick}>Evening Shift</Button>
        <Button value='noNights' name='shiftSchedule' onClick={handleClick}>No Nights</Button>
        <Button value='overNights' name='shiftSchedule' onClick={handleClick}>Overnights</Button>
        <Button value='weekendNights' name='shiftSchedule' onClick={handleClick}>Weekend Nights</Button>
        <Button value='weekendOnly' name='shiftSchedule' onClick={handleClick}>Weekends Only</Button>
        <Button value='noWeekend' name='shiftSchedule' onClick={handleClick}>No Weekends</Button>
        <Button value='onCall'name='shiftSchedule' onClick={handleClick}>On Call</Button>
        <Button value='holiday' name='shiftSchedule' onClick={handleClick}>Holidays Only</Button>
        <Button value='selfSchedule' name='shiftSchedule' onClick={handleClick}>Self-Determined Schedule</Button>
        <Button value='afterSchool' name='shiftSchedule' onClick={handleClick}>After School</Button>
        <Button value='overtime' name='shiftSchedule' onClick={handleClick}>Overtime</Button>
        <Button value='other' name='shiftSchedule' onClick={handleClick}>Other</Button>
        <Button value='' name='shiftSchedule' onClick={handleClick}>clear</Button>
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

/*----- RENDERER -----*/
return (
  <Form>
      <Row>
        <h1>Post a Job</h1>
      </Row>
      {renderCompany()}
      {renderLocation()}
      {renderIndustry()}
      {renderJobTitle()}
      {renderSalary()}
      {renderPayRate()}
      {renderDescription()}
      {renderAvailablePositions()}
      {renderJobType()}
      {renderShiftSchedule()}
      {renderPostJob()}
    </Form>
  )
}




/*========== STYLES ==========*/