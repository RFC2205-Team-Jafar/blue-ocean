import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Column } from '../../public/stylesheets/styles.js'
import { AllContext } from "../index.jsx";
import sendInvite from "./calendar_event.jsx";
import { GoogleLogin } from "react-google-login"

import geoConverter from "./geolocation.jsx";

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
          <form>
            <label><b>Start Date</b></label>
            <input name="startDate" type="date" onChange={(e) => handleChange(e.target)} />
            <label><b>Start Time</b></label>
            <input name="startTime" type="time" onChange={(e) => handleChange(e.target)} />
            <label><b>End Date</b></label>
            <input name="endDate" type="date" onChange={(e) => handleChange(e.target)} />
            <label><b>End Time</b></label>
            <input name="endTime" type="time" onChange={(e) => handleChange(e.target)} />
            <label><b>Location</b></label>
            <input name="location" type="text" placeholder="zoom.url OR 123 adress" onChange={(e) => handleChange(e.target)} />
            <label><b>Description</b></label>
            <input name="description" type="text" placeholder="Important information for applicant to know"
              onChange={(e) => handleChange(e.target)} />
          </form>
          <button onClick={() => handleSubmit()}>Submit</button>
          <button onClick={handleClose}> Close </button>
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
