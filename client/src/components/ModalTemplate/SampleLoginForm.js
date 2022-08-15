import React, { useState } from 'react';
import { StyledModal } from './StyledModal';

const SampleLoginForm = () => {
  // You should not need to change anything from Line 6-10
  const [modalOpen, setModalOpen] = useState(false);

  const hideModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Plug in your title here */}
      <h1 onClick={() => setModalOpen(true)} > Click Here to Login </h1>

      {/* Modal Section */}
      <StyledModal
        show={modalOpen}
        handleClose={hideModal}>

        {/*Plug in your form here */}
        <div>Email </div>
        <input type="email" />
        <div>Password</div>
        <input type="password" />
        <button> Sign in </button>

      </StyledModal>
    </>
  )
}

export default SampleLoginForm;