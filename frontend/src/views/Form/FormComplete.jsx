import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Form.scss'

const FormComplete = () => {
  return (
    <div className='form'>
      <h1>Form Complete</h1>
      <p>Thank you for submitting the form!</p>
      <NavLink to="/">Go back to the landing page</NavLink>
    </div>
  );
};

export default FormComplete;