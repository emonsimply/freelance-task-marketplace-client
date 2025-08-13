import React from 'react';
import Banner from './Banner';
import HowItWorks from './HowItWorks ';
import TopCategories from './TopCategories ';
import FeaturedTasks from './FeaturedTasks';

const Home = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <FeaturedTasks></FeaturedTasks>
      <HowItWorks></HowItWorks>
      <TopCategories></TopCategories>
    </div>
  );
};

export default Home;