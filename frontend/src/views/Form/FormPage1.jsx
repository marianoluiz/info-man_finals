import React from 'react';

const FormPage1 = ({nextPage}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    nextPage();
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