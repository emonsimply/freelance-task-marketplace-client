import React, { use } from "react";
import { UserContext } from "../context/AuthProvider";
import { useLoaderData } from "react-router";
import Post from "./Post";

const MyPostedTasks = () => {
  const { user } = use(UserContext);

  const data = useLoaderData();

  // console.log(data, user);
  const myTasks = data.filter((task) => task.userEmail === user?.email);
  // console.log(myTasks);

  return (
    <div>
      {myTasks.length > 0 ? (
        <div className="flex flex-col gap-6">
          {myTasks.map((task) => (
            <Post key={task._id} task={task} />
          ))}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-4">You haven't posted any tasks yet.</h1>
        </div>
      )}
    </div>
  );
};

export default MyPostedTasks;
