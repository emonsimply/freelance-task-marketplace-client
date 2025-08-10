import React, { Suspense } from "react";
import TaskCard from "./TaskCard";
import { useLoaderData } from "react-router";

const BrowseTasks = () => {
  const tasks = useLoaderData();
  console.log(tasks);
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      }
    >
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </Suspense>
  );
};

export default BrowseTasks;
