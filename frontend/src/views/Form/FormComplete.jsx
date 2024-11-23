import React from 'react';
import { NavLink } from 'react-router-dom';

const FormComplete = () => {
  return (
    <div>
      <h1>Form Complete</h1>
      <p>Thank you for submitting the form!</p>
      <NavLink to="/">Go back to the landing page</NavLink>
    </div>
  );
};

export default FormComplete;