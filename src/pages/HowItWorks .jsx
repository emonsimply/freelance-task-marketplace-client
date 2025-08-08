import React from "react";

const HowItWorks = () => {
  return (
    <div className="md:my-16 px-4 md:bg-blue-100 py-18 rounded-lg mx-auto">
      <h2 className="text-3xl md:text-4xl text-green-700 font-bold text-center mb-8">
        How It Works
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            1. Post a Task
          </h3>
          <p className="text-gray-600">
            Describe your task, set a deadline, and choose a budget. Let freelancers find you.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            2. Receive Bids
          </h3>
          <p className="text-gray-600">
            Freelancers will bid on your task. Review profiles and choose the best one.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-green-500 mb-2">
            3. Get It Done
          </h3>
          <p className="text-gray-600">
            Manage your task and communicate with freelancers until it's completed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
