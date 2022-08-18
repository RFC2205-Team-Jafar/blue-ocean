import React from 'react';
import styled from 'styled-components';

// This is the modal TEMPLATE. Do not modify.
// Import statement: import { StyledModal } from './StyledModal'

const ModalDiv = styled.div`
  display: ${p => p.block && p.block};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 7;
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

export const StyledModal = ({
  handleClose,
  show,
  children
}) => {
  return (
    <ModalDiv block={ show ? 'block' : 'none' }>
      <ContentDiv>
        {children}
        <button onClick = {handleClose}> Close </button>
      </ContentDiv>
    </ModalDiv>
  )
};