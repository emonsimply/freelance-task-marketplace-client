import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks ';
import TopCategories from './TopCategories ';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <TopCategories></TopCategories>
    </div>
  );
};

export default Home;