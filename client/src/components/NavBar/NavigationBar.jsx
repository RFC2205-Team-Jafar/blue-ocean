/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

/*========== INTERNAL MODULES ==========*/
import { Row } from '../../../public/stylesheets/styles.js';
import NavLogo from './NavLogo.jsx';
import LoginForm from '../loginComponents/LoginForm.jsx';
import {AllContext} from '../../index.jsx'

/*========== EXPORTS ==========*/
export default function NavigationBar({view, applicants}) {

  /*----- STATE HOOKS -----*/
  // const [] = useState();
  const {accountType} = useContext(AllContext);
  const {firstName} = useContext(AllContext);


  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleClick = ({ target: { name, value } }) => {};


  /*----- RENDER METHODS -----*/
  const loginPage = () => {
    return (
    <Button>
    <LoginForm />
    </Button>
    )
  }

  const userPage = () => {
    return (
      <h1 style={{ 'color': '#1976d2', 'fontWeight': 'lighter' }}> <AccountCircleOutlinedIcon style={{ 'color': '#1976d2'}}/> Welcome Back {firstName}</h1>

      //profile button
      //Sign out button from XX
    )
  }



  /*----- RENDERER -----*/
  return (
    <NavBar>
      <NavLogo/>
      {accountType === undefined && loginPage()}
      {(accountType === 'seeker' || accountType === 'recruiter') && userPage()}

    </NavBar>
  )
}




/*========== STYLES ==========*/

const NavBar = styled(AppBar)({
  backgroundColor: '#999',
  marginBottom: '5px',
  padding: '5px',
  height: '4em',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&:hover': {
    color: '#fff',
    backgroundColor:'#75C043',
    borderColor:'#75C043',
  },
  postion: 'sticky'
});