import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AllContext } from '../index.jsx';


const Seeker = () => {
  const { counter, setCounter } = useContext(AllContext);

  return (
    <>
      <h1>Seeker View </h1>
      <div>Current Counter: {counter}</div>
      <button onClick={() => setCounter(prev => prev + 1)}>Increase Counter by 1</button>
      <Link to="/">Back to Home</Link>
    </>
  )
};

export default Seeker;