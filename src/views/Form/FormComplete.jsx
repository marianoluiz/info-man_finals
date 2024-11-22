import React from 'react';
import { Link } from 'react-router-dom';

const FormComplete = () => {
  return (
    <div>
      <h1>Form Complete</h1>
      <p>Thank you for submitting the form!</p>
      <Link to="/">Go back to the landing page</Link>
    </div>
  );
};

export default FormComplete;