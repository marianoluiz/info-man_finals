import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Welcome to Pamantasan ng Lungsod ng Maynila</h1>
      <NavLink to="/form-page-1">Register Now</NavLink>
    </>
  );
}

export default Home;