import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar></Navbar>
      <div className='max-w-screen min-h-screen mx-auto my-10 flex-grow'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;