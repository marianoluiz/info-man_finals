import React from 'react';
import '../../styles/form.scss'

const FormPage1 = ({nextPage}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    //validation here
    nextPage();
  };
  
  return (
    <div className='form container'>
      <p className="form__disclaimer my-md-2">*Required Fields</p>  
      <form onSubmit={handleSubmit} className='row'>

      <div className="form__labels col-md-4">
        <label for="name" className='form-label'>Name:</label>
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>

      </div>

      <div className="form__input col-md-8">
        <input type="text" id="name" name="name" required />
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>


        <button type="submit">Next</button>

      </form>
    </div>
  );
};

export default FormPage1;