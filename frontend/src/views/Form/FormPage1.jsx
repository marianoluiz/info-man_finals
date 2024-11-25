import React from 'react';
import '../../styles/Form.scss'

const FormPage1 = ({nextPage}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    nextPage();
  };
  
  return (
    <div className='form'>
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