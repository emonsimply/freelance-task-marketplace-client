import React from "react";

const TopCategories = () => {
  return (
    <div className="md:my-16 px-4 mx-auto">
      <h2 className="text-3xl  md:text-4xl text-green-700 font-bold text-center mb-8">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="p-4 bg-green-100 text-green-700 rounded shadow">
          Web Development
        </div>
        <div className="p-4 bg-blue-100 text-green-700 rounded shadow">
          Graphic Design
        </div>
        <div className="p-4 bg-yellow-100 text-green-700 rounded shadow">
          Content Writing
        </div>
        <div className="p-4 bg-pink-100 text-green-700  rounded shadow">
          Digital Marketing
        </div>
        <div className="p-4 bg-purple-100 text-green-700 rounded shadow">
          Video Editing
        </div>
        <div className="p-4 bg-red-100 text-green-700 rounded shadow">
          Mobile App
        </div>
        <div className="p-4 bg-gray-100 text-green-700 rounded shadow">
          UI/UX Design
        </div>
        <div className="p-4 bg-indigo-100 text-green-700 rounded shadow">
          SEO Optimization
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
