import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import AddTask from "../pages/AddTask";
import BrowseTasks from "../pages/BrowseTasks";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import TaskDetails from "../pages/TaskDetails";
import MyPostedTasks from "../pages/MyPostedTasks";
import UpdateTask from "../pages/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "browseTasks",
        loader: () => fetch("http://localhost:3000/addTask"),
        element: <BrowseTasks></BrowseTasks>,
      },
      {
        path: "/taskDetails/:id",
        loader: () => fetch("http://localhost:3000/addTask"),
        element: <TaskDetails></TaskDetails>,
      },
      {
        path: "myPostedTasks",
        loader: () => fetch("http://localhost:3000/addTask"),
        element: <MyPostedTasks></MyPostedTasks>,
      },
      {
        path: "/updataTask/:id",
        loader: ({params}) => fetch(`http://localhost:3000/addTask/${params.id}`),
        element: <UpdateTask></UpdateTask>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;

// Home
// Add Task (It will be a private/protected route)
// Browse Tasks
// My Posted Tasks (It will be a private/protected route)
// Login/Signup
