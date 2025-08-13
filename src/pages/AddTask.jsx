import React, { use } from "react";
import { UserContext } from "../context/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddTask = () => {
  const { user } = use(UserContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const taskTitle = form.taskTitle.value;
    const category = form.category.value;
    const deadline = form.deadline.value;
    const description = form.description.value;
    const budget = form.budget.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    console.log(
      taskTitle,
      deadline,
      category,
      description,
      budget,
      userName,
      userEmail
    );
    const task = {
      taskTitle,
      category,
      deadline,
      description,
      budget,
      userName,
      userEmail,
    };

    // send data to the server
    fetch("https://freelance-task-marketplace-server-eta.vercel.app/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your task has been added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <>
      {user ? (
        <div className="w-full shadow-lg rounded-xl p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
            Add New Task
          </h2>

          <form
            onSubmit={handleAddTask}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Task Title */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Enter task title"
                name="taskTitle"
                className="input input-bordered w-full focus:border-green-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium  mb-1">
                Category
              </label>
              <select
                name="category"
                className="select select-bordered w-full  focus:border-green-500"
              >
                <option disabled selected>
                  Select category
                </option>
                <option>Web Development</option>
                <option>Graphic Design</option>
                <option>Content Writing</option>
                <option>Digital Marketing</option>
                <option>Video Editing</option>
                <option>Mobile App</option>
                <option>UI/UX Design</option>
                <option>SEO Optimization</option>
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium  mb-1">
                Deadline
              </label>
              <input
                type="date"
                name="deadline"
                className="input input-bordered w-full"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium  mb-1">
                Description
              </label>
              <textarea
                placeholder="Describe the task"
                name="description"
                className="textarea textarea-bordered w-full"
                rows="4"
              ></textarea>
            </div>

            {/* Budget */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium  mb-1">Budget</label>
              <input
                type="number"
                placeholder="Enter budget"
                name="budget"
                className="input input-bordered w-full md:col-span-2"
              />
            </div>
            {/* User Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                User Name
              </label>
              <input
                type="text"
                value={user.displayName}
                name="userName"
                readOnly
                className="input input-bordered w-full bg-gray-100  text-gray-500"
              />
            </div>
            {/* User Email */}
            <div>
              <label className="block text-sm font-medium  mb-1">
                User Email
              </label>
              <input
                type="email"
                value={user.email}
                name="userEmail"
                readOnly
                className="input input-bordered w-full bg-gray-100  text-gray-500"
              />
            </div>

            {/* Add Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn rounded-full bg-green-500 hover:bg-green-600 text-white w-full"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className=" flex flex-col items-center justify-center ">
          <h2 className="text-xl font-bold text-red-600 mb-4">
            You are not logged in
          </h2>
          <p className="text-gray-600 mb-6">Please login to add a new task.</p>
          <Link
            to="/login"
            className="btn bg-green-500 hover:bg-green-600 text-white rounded-full w-full"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
};

export default AddTask;
