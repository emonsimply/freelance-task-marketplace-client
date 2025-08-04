import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layout/MainLayout";
import AddTask from "../pages/AddTask";
import BrowseTasks from "../pages/BrowseTasks";
import Post from "../pages/Post";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h1>Home</h1>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "browseTasks",
        element: <BrowseTasks></BrowseTasks>,
      },
      {
        path: "post",
        element: <Post></Post>,
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
