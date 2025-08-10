import React, { use } from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { UserContext } from "../context/AuthProvider";

const TaskDetails = () => {
  const {user} = use(UserContext);
  const { id } = useParams();
  const data = useLoaderData();
  const task = data.find((task) => task._id === id);
  // console.log(task);
  console.log(user);
  return (
    <div>
      {user ? (
        <div className="max-w-4xl mx-auto rounded-2xl shadow-lg p-6 md:p-10">
          {/* Header */}
          <h1 className="text-xl md:text-3xl font-bold text-green-600 mb-4">
            {task.taskTitle}
          </h1>
          <p className="text-gray-500 mb-6">{task.category}</p>

          {/* Task Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Budget</p>
              <p className="text-xl font-semibold text-green-600">
                ${task.budget}
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Deadline</p>
              <p className="text-xl font-semibold text-green-600">
                {task.deadline}
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Posted By</p>
              <p className="text-xl font-semibold text-green-600">
                {task.userName}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-green-600 mb-2">
              Description
            </h2>
            <p className=" leading-relaxed">{task.description}</p>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold text-green-600 mb-2">
              Contact Information
            </h2>
            <p className="text-gray-700">
              Email:{" "}
              <a
                className="text-green-600 underline"
              >
                {task.userEmail}
              </a>
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-8 flex justify-end">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold btn rounded-lg transition duration-200">
              Place a Bid
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center ">
          <h2 className="text-xl font-bold text-red-600 mb-4">
            You are not logged in
          </h2>
          <p className="text-gray-600 mb-6">Please login to see task details.</p>
          <Link
            to="/login"
            className="btn bg-green-500 hover:bg-green-600 text-white rounded-full w-full"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
