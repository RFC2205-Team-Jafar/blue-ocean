/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';

/*========== INTERNAL MODULES ==========*/
import { Row } from '../../../public/stylesheets/styles.js';
import NavLogo from './NavLogo.jsx';
import LoginForm from '../loginComponents/LoginForm.jsx';


/*========== EXPORTS ==========*/
export default function NavigationBar({view, applicants}) {


  /*----- STATE HOOKS -----*/
  // const [] = useState();

  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  const handleClick = ({ target: { name, value } }) => {};


  /*----- RENDER METHODS -----*/


  /*----- RENDERER -----*/
  return (
    <NavBar>
      <NavLogo/>
      <LoginForm />
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
  justifyContent: 'space-evenly',
  alignItems: 'center',
  '&:hover': {
    color: '#fff',
    backgroundColor:'#75C043',
    borderColor:'#75C043',
  },
});