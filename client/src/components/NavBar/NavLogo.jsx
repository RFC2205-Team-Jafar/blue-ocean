/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Row } from '../../../public/stylesheets/styles.js';
import logo from '../../images/greenhorn.png';


/*========== EXPORTS ==========*/
export default function NavLogo({}) {


  /*----- STATE HOOKS -----*/
  // const [] = useState();

  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  // const handleClick = ({ target: { name, value } }) => {};


  /*----- RENDER METHODS -----*/


  /*----- RENDERER -----*/
  // return <Img src={logo}/>
  return <Logo src={'../../images/greenhorn.png'}/>
}




/*========== STYLES ==========*/
const Logo = styled.img`
  width: 250px;
  margin: 10px;
`;