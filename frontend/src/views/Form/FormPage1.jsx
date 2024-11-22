import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage1 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form-page-2');
  };
  
  return (
    <div>
      <h1>Form Page 1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default FormPage1;