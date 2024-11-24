import React from 'react';
import { NavLink } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import '../styles/home.scss'
const Home = () => {
  return (
    <>
      <MainLayout>
      <div className='home-container'>

        <h1>Welcome to Pamantasan ng Lungsod ng Maynila</h1>
        <NavLink to="/form">Register Now</NavLink>

      </div>

      </MainLayout>
    </>
  );
}

export default Home;