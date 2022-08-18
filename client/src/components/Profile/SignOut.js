import React, { useContext, useState } from 'react';
import { useAuth } from '../AuthContext.jsx';
import { Link, useNavigate } from "react-router-dom";
import { AllContext } from '../../index.jsx';


const SignOut = () => {
  // global states
  const { logOut } = useAuth();
  const { uuid, setUuid } = useContext(AllContext);
  const { email, setEmail } = useContext(AllContext);
  const { accountType, setAccountType } = useContext(AllContext);
  const { firstName, setFirstName } = useContext(AllContext);
  const { lastName, setLastName } = useContext(AllContext);
  const { preferredIndustry, setPreferredIndustry } = useContext(AllContext);
  const { zipCode, setZipCode } = useContext(AllContext);
  const { company, setCompany } = useContext(AllContext);
  const { coord_lat, setCoord_lat } = useContext(AllContext);
  const { coord_long, setCoord_long } = useContext(AllContext);
  const { resuemUrl, setResumeUrl } = useContext(AllContext);

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      await setUuid();
      await setEmail();
      await setAccountType();
      await setFirstName();
      await setLastName();
      await setPreferredIndustry();
      await setZipCode();
      await setCompany();
      await setCoord_lat();
      await setCoord_long();
      await setResumeUrl();
      navigate('/');
    } catch(e) {
      console.log('Error signing out: ', e);
    }
  }

  return (
    <button onClick={() => handleLogOut()}>Sign Out</button>
  )
};

export default SignOut;




