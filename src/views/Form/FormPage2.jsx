import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage2 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form-page-3');
  };

  return (
    <div>
      <h1>Form Page 2</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default FormPage2;