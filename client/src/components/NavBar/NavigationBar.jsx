/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from "react-router-dom";

/*========== INTERNAL MODULES ==========*/
import { Row, Div } from '../../../public/stylesheets/styles.js';
import NavLogo from './NavLogo.jsx';
import LoginForm from '../loginComponents/LoginForm.jsx';
import { AllContext } from '../../index.jsx'
import SignOut from '../Profile/SignOut.js'

/*========== EXPORTS ==========*/
export default function NavigationBar({ view, applicants }) {

  /*----- STATE HOOKS -----*/
  // const [] = useState();
  const { accountType } = useContext(AllContext);
  const { firstName } = useContext(AllContext);


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleClick = ({ target: { name, value } }) => { };


  /*----- RENDER METHODS -----*/
  const loginPage = () => {
    return (
      <NavSection>
        <Button>
          <LoginForm />
        </Button>
      </NavSection>
    )
  }

  const userPage = () => {
    const name = firstName.toUpperCase()
    return (
      <Row>

        <NavSection><Link to="profile" style = {{ fontWeight: 'lighter', color: 'black', cursor: 'pointer', textDecoration:'none'}} ><Row>WELCOME BACK {name}  &nbsp; <AccountCircleOutlinedIcon style={{ color: '000000'}}/></Row></Link></NavSection>
        <p style = {{color: 'black'}}> &nbsp; | &nbsp;</p>
        <NavSection><SignOut/></NavSection>

      </Row>
      //profile button
    )
  }



  /*----- RENDERER -----*/
  return (
    <NavBar>
      <NavLogo />
      {accountType === undefined && loginPage()}
      {(accountType === 'seeker' || accountType === 'recruiter') && userPage()}

    </NavBar>
  )
}




/*========== STYLES ==========*/

const NavBar = styled(AppBar)({
  backgroundColor: '#999',
  // marginBottom: '5px',
  // padding: '5px',
  height: '4em',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  // '&:hover': {
  //   color: '#fff',
  //   backgroundColor:'#75C043',
  //   borderColor:'#75C043',
  // },
  postion: 'sticky'
});

const NavSection = styled(Row)({
  fontWeight: 'lighter',
  height: '4em',
  color: 'black',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#75C043',
  },
  display: 'flex',
  AlignItems: 'center',
  flexDirection: 'row'
})