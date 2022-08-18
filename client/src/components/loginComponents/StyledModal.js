import React, { useEffect, useRef } from 'react';
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
  const ref = useRef()
  useEffect(() => {
    const outSideClick = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        show(false);
      }
    }
    document.addEventListener("mousedown", outSideClick)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", outSideClick)
    }
  }, [show])


  return (
    <ModalDiv ref={ref} block={ show ? 'block' : 'none' }>
      <ContentDiv>
        {children}
        <button onClick = {handleClose}> Close </button>
      </ContentDiv>
    </ModalDiv>
  )
};