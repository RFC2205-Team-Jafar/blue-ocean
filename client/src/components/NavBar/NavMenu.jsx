/*========== EXTERNAL MODULES ==========*/
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';

/*========== INTERNAL MODULES ==========*/
import { Row } from '../../../public/stylesheets/styles.js';


/*========== EXPORTS ==========*/
export default function NavMenu({}) {


  /*----- STATE HOOKS -----*/
  // const [] = useState();

  /*----- LIFESTYLE METHODS -----*/
  // useEffect(() =>  {}, []);

  /*----- EVENT HANDLERS -----*/
  // const handleClick = ({ target: { name, value } }) => {};


  /*----- RENDER METHODS -----*/


  /*----- RENDERER -----*/
  // return <Img src={logo}/>
  return <Logo src={'../../images/logoipsum.png'}/>
}




/*========== STYLES ==========*/
const Logo = styled.img`
  width: 150px;
`;