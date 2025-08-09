import React from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './TaskCard';

const BrowseTasks = () => {
  const tasks = useLoaderData();
  console.log(tasks);
  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4'>
      {
        tasks.map(task=> <TaskCard key={task._id} task={task}></TaskCard>)
      }
    </div>
  );
};

export default BrowseTasks;