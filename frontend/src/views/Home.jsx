import React from 'react';
import { NavLink } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import '../styles/home.scss'
const Home = () => {
  return (
    <>
      <MainLayout>
      <div className='home__bg d-flex align-items-center'>
          <div className='home__left'>
            <h1 className='home__main-text'>Welcome to Pamantasan ng Lungsod ng Maynila</h1>
            <NavLink to="/form" className={'btn home__button'}>Register Now</NavLink>
          </div>

      </div>

      </MainLayout>
    </>
  );
}

export default Home;