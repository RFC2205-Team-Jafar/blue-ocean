/*========== EXTERNAL MODULES ==========*/
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import {Form, Label, Row, Input, ButtonGroup} from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function PostJob() {

  /*----- STATE HOOKS -----*/
  // const [] = useState();


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleChange = () => '';
  const handleSchedule = () => {
    // set modify the background of the clicked button to be a different color
    return ''
  };
  const handleLocation = () => {
    // set modify the background of the clicked button to be a different color
    return ''
  };
  const handlePay = () => {
    // set modify the background of the clicked button to be a different color
    return ''
  };
  const handleJobType = () => {
    // set modify the background of the clicked button to be a different color
    return ''
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
        <ButtonGroup>
          <Button value='inPerson' name='jobLocation' onClick={handleLocation}>In Person</Button>
          <Button value='hybrid' name='jobLocation' onClick={handleLocation}>Hybrid</Button>
          <Button value='remote' name='jobLocation' onClick={handleLocation}>Remote</Button>
          <Button value='onTheRoad' name='jobLocation' onClick={handleLocation}>On the Road</Button>
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
        <Button value='hourly' name='payRate' onClick={handlePay}>per hour</Button>
        <Button value='daily' name='payRate' onClick={handlePay}>per day</Button>
        <Button value='weekly' name='payRate' onClick={handlePay}>per week</Button>
        <Button value='monthly' name='payRate' onClick={handlePay}>per month</Button>
        <Button value='yearly' name='payRate' onClick={handlePay}>per year</Button>
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
        <Button value='fullTime' name='jobType' onClick={handleJobType}>Full Time</Button>
        <Button value='partTime' name='jobType' onClick={handleJobType}>Part Time</Button>
        <Button value='contract' name='jobType' onClick={handleJobType}>Contract</Button>
        <Button value='temp' name='jobType' onClick={handleJobType}>Temp Position</Button>
        <Button value='seasonal' name='jobType' onClick={handleJobType}>Seasonal</Button>
        <Button value='internship' name='jobType' onClick={handleJobType}>Internship</Button>
      </ButtonGroup>
    </Label>
  )
}

const renderShiftSchedule = () => {
  return (
    <Label>Shift Schedule
      <ButtonGroup>
        <Button value='4hourShift' name='shiftSchedule' onClick={handleSchedule}>4 hour shift</Button>
        <Button value='8hourShift' name='shiftSchedule' onClick={handleSchedule}>8 hour shift</Button>
        <Button value='10hourShift' name='shiftSchedule' onClick={handleSchedule}>10 hour shift</Button>
        <Button value='12hourShift' name='shiftSchedule' onClick={handleSchedule}>12 hour shift</Button>
        <Button value='3x12' name='shiftSchedule' onClick={handleSchedule}>3 x 12 hour shifts</Button>
        <Button value='4x10' name='shiftSchedule' onClick={handleSchedule}>4 x 10 hour shifts</Button>
        <Button value='4x12' name='shiftSchedule' onClick={handleSchedule}>4 x 12 hour shifts</Button>
        <Button value='5x8' name='shiftSchedule' onClick={handleSchedule}>5 x 8 hour shifts</Button>
        <Button value='mondayToFriday' name='shiftSchedule' onClick={handleSchedule}>Monday to Friday</Button>
        <Button value='dayShift' name='shiftSchedule' onClick={handleSchedule}>Day Shift</Button>
        <Button value='nightShift' name='shiftSchedule' onClick={handleSchedule}>Night Shift</Button>
        <Button value='eveningShift' name='shiftSchedule' onClick={handleSchedule}>Evening Shift</Button>
        <Button value='noNights' name='shiftSchedule' onClick={handleSchedule}>No Nights</Button>
        <Button value='overNights' name='shiftSchedule' onClick={handleSchedule}>Overnights</Button>
        <Button value='weekendNights' name='shiftSchedule' onClick={handleSchedule}>Weekend Nights</Button>
        <Button value='weekendOnly' name='shiftSchedule' onClick={handleSchedule}>Weekends Only</Button>
        <Button value='noWeekend' name='shiftSchedule' onClick={handleSchedule}>No Weekends</Button>
        <Button value='onCall'name='shiftSchedule' onClick={handleSchedule}>On Call</Button>
        <Button value='holiday' name='shiftSchedule' onClick={handleSchedule}>Holidays Only</Button>
        <Button value='selfSchedule' name='shiftSchedule' onClick={handleSchedule}>Self-Determined Schedule</Button>
        <Button value='afterSchool' name='shiftSchedule' onClick={handleSchedule}>After School</Button>
        <Button value='overtime' name='shiftSchedule' onClick={handleSchedule}>Overtime</Button>
        <Button value='other' name='shiftSchedule' onClick={handleSchedule}>Other</Button>
        <Button value='' name='shiftSchedule' onClick={handleSchedule}>clear</Button>
      </ButtonGroup>
    </Label>
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
    </Form>
  )
}




/*========== STYLES ==========*/