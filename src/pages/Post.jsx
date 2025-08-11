import React from "react";

const Post = ({ task }) => {
  console.log(task);
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md">
      <table className="min-w-full bg-white">
        <thead className="bg-green-100">
          <tr>
            <th className="py-3 px-4 text-left text-green-700 font-semibold">
              Task Title
            </th>
            <th className="py-3 px-4 text-left text-green-700 font-semibold hidden sm:table-cell">
              Category
            </th>
            <th className="py-3 px-4 text-left text-green-700 font-semibold hidden md:table-cell">
              Deadline
            </th>
            <th className="py-3 px-4 text-left text-green-700 font-semibold">
              Budget
            </th>
            <th className="py-3 px-4 text-left text-green-700 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr key={task._id} className="hover:bg-green-50 transition-colors">
            <td className="py-4 px-4">
              <div className="font-medium text-gray-800">{task.taskTitle}</div>
              <div className="text-sm text-gray-500 sm:hidden">
                {task.category}
              </div>
            </td>
            <td className="py-4 px-4 hidden sm:table-cell text-gray-700">
              {task.category}
            </td>
            <td className="py-4 px-4 hidden md:table-cell text-gray-700">
              {task.deadline}
            </td>
            <td className="py-4 px-4 font-semibold text-green-700">
              ${task.budget}
            </td>
            <td className="py-4 px-4">
              <div className="flex flex-col gap-1">
                <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm transition-colors hover:rounded-full">
                  Update
                </button>
                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm hover:rounded-full ">
                  Delete
                </button>
                <button className="px-3 py-1 bg-green-700 text-white rounded hover:bg-green-800 text-sm transition-colors hover:rounded-full">
                  Bids
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Post;
