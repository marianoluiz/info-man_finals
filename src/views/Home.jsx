import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Welcome to the Multi-Page Form App</h1>
      <NavLink to="/form-page-1">Start the Form</NavLink>
    </>
  );
}

export default Home;