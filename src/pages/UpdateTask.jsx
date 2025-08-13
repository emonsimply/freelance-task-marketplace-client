import React, { use } from "react";
import { UserContext } from "../context/AuthProvider";
import { useLoaderData } from "react-router";

const UpdateTask = () => {
  const { user } = use(UserContext);
  const { taskTitle, category, deadline, description, budget } = useLoaderData;

  const handleUpdateTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedTask = Object.fromEntries(formData.entries());
    console.log(updatedTask)
  };

  return (
    <div>
      <div className="w-full shadow-lg rounded-xl p-8 border border-green-100">
        <h2 className="text-2xl font-bold text-green-600 mb-6 text-center">
          Update Task
        </h2>

        <form
          onSubmit={handleUpdateTask}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Task Title */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Task Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              name="taskTitle"
              defaultValue={taskTitle}
              className="input input-bordered w-full focus:border-green-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium  mb-1">Category</label>
            <select
              name="category"
              defaultValue={category}
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
            <label className="block text-sm font-medium  mb-1">Deadline</label>
            <input
              type="date"
              name="deadline"
              defaultValue={deadline}
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
              defaultValue={description}
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
              defaultValue={budget}
              className="input input-bordered w-full md:col-span-2"
            />
          </div>
          {/* User Name */}
          <div>
            <label className="block text-sm font-medium mb-1">User Name</label>
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
              Update Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
