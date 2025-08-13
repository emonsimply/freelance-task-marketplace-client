import { useEffect, useState } from "react";

const FeaturedTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://freelance-task-marketplace-server-eta.vercel.app/addTask") // make sure port matches your backend
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Featured Tasks:", data); // debugging
        setTasks(data);
      })
      .catch((err) => console.error("Error fetching featured tasks:", err));
  }, []);

  return (
    <section className="py-12 ">
      <div className=" px-4">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
          Featured Tasks
        </h2>

        {tasks.length === 0 ? (
          <p className="text-center text-gray-600">No featured tasks found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="card bg-white shadow-lg border border-green-200 hover:shadow-xl transition duration-300"
              >
                <div className="card-body">
                  <h3 className="text-xl font-bold text-green-600">
                    {task.taskTitle}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{task.category}</p>
                  <p className="text-gray-800 mb-3 line-clamp-2">
                    {task.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    Deadline:{" "}
                    <span className="font-medium">
                      {new Date(task.deadline).toLocaleDateString()}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Budget:{" "}
                    <span className="font-medium text-green-500">
                      ${task.budget}
                    </span>
                  </p>
                  <button className="btn bg-green-500 hover:bg-green-600 text-white rounded-full w-full">
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedTasks;
