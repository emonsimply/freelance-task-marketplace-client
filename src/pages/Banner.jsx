import React from 'react';

const Banner = () => {
  return (
    <div className="carousel rounded-lg">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full h-[400px] bg-green-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">Find Top Freelancers Easily</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Post your task and get offers from talented freelancers around the world.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full h-[400px] bg-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">Bid on Tasks You Love</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Browse tasks that match your skills and send your proposals with ease.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full h-[400px] bg-purple-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-700 mb-4">Manage Your Tasks Smoothly</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Track your posted tasks, update details, and communicate with freelancers all in one place.
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;