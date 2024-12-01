import React from 'react';
import '../../styles/form.scss';

const FormPage2 = ({ nextPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextPage();
  };

  return (
    <div className="form container">
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
