import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Column, Form, modalBG, Label, Input } from '../../public/stylesheets/styles.js'
import { AllContext } from "../index.jsx";
import sendInvite from "./calendar_event.jsx";

// Material UI
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";

// End Material UI

//styled compoenents
import StyledModal from '../components/ModalTemplate/StyledModal_Template.js'

export const InterviewInviteModal = () => {
  const { email } = useContext(AllContext); // Waiting to email to be saved in state
  const handleSubmit = () => {
    sendInvite(inviteInfo, email);
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
      <Button variant='contained' onClick={() => handleShow()} >Schedule Interview</Button>
      <ModalDiv block={show ? 'block' : 'none'}>
        <ContentDiv>
          <Style_Title>Schedule Interview</Style_Title>
          <StyledForm>
            <Child>
              <FormLabel><b>Start Date</b></FormLabel>
              <Input name="startDate" type="date" onChange={(e) => handleChange(e.target)} />
            </Child>
            <Child>
              <FormLabel><b>Start Time</b></FormLabel>
              <Input name="startTime" type="time" onChange={(e) => handleChange(e.target)} />
            </Child>
            <Child>
              <FormLabel><b>End Date</b></FormLabel>
              <Input name="endDate" type="date" onChange={(e) => handleChange(e.target)} />
            </Child>
            <Child>
              <FormLabel><b>End Time</b></FormLabel>
              <Input name="endTime" type="time" onChange={(e) => handleChange(e.target)} />
            </Child>
          </StyledForm>
          <Styled_Text>
            <Child_Text>
              <FormLabel><b>Location</b></FormLabel>
              <Input style={{ width: '75%' }} name="location" type="text" placeholder="zoom.url OR 123 Address" onChange={(e) => handleChange(e.target)} />
            </Child_Text>
            <Child_Text>
              <FormLabel><b>Description</b></FormLabel>
              <Input style={{ width: '70%' }} name="description" type="text" placeholder="Add Details"
                onChange={(e) => handleChange(e.target)} />
            </Child_Text>
          </Styled_Text>
          <Button_Container>
            <Button onClick={() => handleSubmit()}>Submit</Button>
            <Button onClick={handleClose}> Close </Button>
          </Button_Container>
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
  z-index: 10000;
`;


const ContentDiv = styled.div`
  position: fixed;
  background: white;
  width: 30%;
  height: auto;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  padding: 2rem;
  transform: translate(-50%, -50%);
`;

const StyledForm = styled(FormControl)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  align-self: center;
`;

const Child = styled.div`
  margin: auto;
  display: inline-block;
  flex-basis: 35%;
`;

const Child_Text = styled.div`
  margin: auto;
  display: inline-block;
  flex-basis: 80%;
`;

const Styled_Text = styled.div`
    display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  align-self: center;
`;

const Button_Container = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 25px;
`;

const Style_Title = styled.h2`
  width: 100%;
  align-self: center;
  text-align: center;
  margin-bottom: 35px;
`;