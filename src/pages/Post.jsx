import React from "react";
import Swal from "sweetalert2";

const Post = ({ task }) => {
  const { _id, taskTitle, category, deadline, budget } = task;
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {

        fetch(`http://localhost:3000/addTask/${_id}`, {
          method: 'DELETE'
        })
        .then (res => res.json())
        .then(data => {
         if(data.deletedCount){
          Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success",
        });
         }
        })
        
      }
    });
  };
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
          <tr key={_id}>
            <td className="py-4 px-4">
              <div className="font-medium text-gray-800">{taskTitle}</div>
              <div className="text-sm text-gray-500 sm:hidden">{category}</div>
            </td>
            <td className="py-4 px-4 hidden sm:table-cell text-gray-700">
              {category}
            </td>
            <td className="py-4 px-4 hidden md:table-cell text-gray-700">
              {deadline}
            </td>
            <td className="py-4 px-4 font-semibold text-green-700">
              ${budget}
            </td>
            <td className="py-4 px-4">
              <div className="flex flex-col gap-1">
                <button className="btn btn-sm bg-green-500 text-white transition-colors hover:rounded-full">
                  Update
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn btn-sm bg-red-500 text-white hover:rounded-full "
                >
                  Delete
                </button>
                <button className="btn btn-sm rounded  transition-colors hover:rounded-full">
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
