import React from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage3 = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form-complete');
  };

  return (
    <div>
      <h1>Form Page 3</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage3;