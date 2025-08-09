import React from "react";
import { Link } from "react-router";

const TaskCard = ({ task }) => {
  return (
    <div
      key={task._id}
      className="shadow-md rounded-xl border border-green-100 flex flex-col"
    >
      <div className="bg-green-100 px-4 py-3 rounded-t-xl">
        <h2 className="text-lg font-semibold text-green-700">
          {task.taskTitle}
        </h2>
        <p className="text-sm text-gray-600">{task.category}</p>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Deadline:</span> {task.deadline}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Budget:</span> ${task.budget}
          </p>
        </div>
      </div>

      <div className="p-4 border-t border-green-100">
        <Link
          to={`/task/${task._id}`}
          className=" w-full text-center btn rounded-full bg-green-500 text-white hover:bg-green-600"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default TaskCard;
