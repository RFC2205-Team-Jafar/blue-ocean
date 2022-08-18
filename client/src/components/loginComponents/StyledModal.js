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
  z-index: 3;
`;

export const StyledModal = ({
  handleClose,
  show,
  children
}) => {
  return (
    <ModalDiv block={ show ? 'block' : 'none' }>
      {children}
    </ModalDiv>
  )
};