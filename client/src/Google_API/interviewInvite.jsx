import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Column, Form, modalBG, Label } from '../../public/stylesheets/styles.js'
import { AllContext } from "../index.jsx";
import sendInvite from "./calendar_event.jsx";

// Material UI
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
// End Material UI

export const InterviewInviteModal = () => {

  const handleSubmit = () => {
    sendInvite(inviteInfo);
    handleClose();
  }

  const [show, setShow] = useState(false);
  const [inviteInfo, setInviteInfo] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setInviteInfo(prevState => ({
      inviteInfo: {
        ...prevState.inviteInfo,
        [e.name]: e.value
      }
    }))
  }


  return (
    <div>
      <button onClick={() => handleShow()} >Test</button>
      <ModalDiv block={show ? 'block' : 'none'}>
        <ContentDiv>
          <FormControl>
            <FormLabel><b>Start Date</b></FormLabel>
            <TextField name="startDate" type="date" onChange={(e) => handleChange(e.target)} />
            <FormLabel><b>Start Time</b></FormLabel>
            <TextField name="startTime" type="time" onChange={(e) => handleChange(e.target)} />
            <FormLabel><b>End Date</b></FormLabel>
            <TextField name="endDate" type="date" onChange={(e) => handleChange(e.target)} />
            <FormLabel><b>End Time</b></FormLabel>
            <TextField name="endTime" type="time" onChange={(e) => handleChange(e.target)} />
            <FormLabel><b>Location</b></FormLabel>
            <TextField name="location" type="text" placeholder="zoom.url OR 123 adress" onChange={(e) => handleChange(e.target)} />
            <FormLabel><b>Description</b></FormLabel>
            <TextField name="description" type="text" placeholder="Important information for applicant to know"
              onChange={(e) => handleChange(e.target)} />
          </FormControl>
          <Button onClick={() => handleSubmit()}>Submit</Button>
          <Button onClick={handleClose}> Close </Button>
        </ContentDiv>
      </ModalDiv>
    </div>
  )
};


const ModalDiv = styled.div`
  display: ${p => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;


const ContentDiv = styled.div`
  position: fixed;
  background: white;
  width: 50%;
  height: auto;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  padding: 2rem;
  transform: translate(-50%, -50%);
`;