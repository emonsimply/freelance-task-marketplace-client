import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import "../components/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const links = (
    <>
      <NavLink to="/">
        <li className="mr-6">Home </li>
      </NavLink>
      <NavLink to="/addTask">
        <li className="mr-6">Add Task</li>
      </NavLink>
      <NavLink to="/browseTasks">
        <li className="mr-6">Browse Tasks</li>
      </NavLink>
      <NavLink to="/post">
        <li>My Posted Tasks</li>
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <button className="btn rounded-full text-white bg-green-500 hover:bg-green-600">
          <Link to="/login">login</Link>
        </button>
        <button className="btn rounded-full text-white bg-green-500 hover:bg-green-600 mx-2">
          <Link to="/signup">Sign up</Link>
        </button>
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a.75.75 0 01.75.75V4a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2zM4.22 4.22a.75.75 0 011.06 0l.53.53a.75.75 0 11-1.06 1.06l-.53-.53a.75.75 0 010-1.06zm11.03 0a.75.75 0 011.06 1.06l-.53.53a.75.75 0 11-1.06-1.06l.53-.53zM2 10a.75.75 0 01.75-.75H4a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm14 0a.75.75 0 01.75-.75H18a.75.75 0 010 1.5h-1.25A.75.75 0 0116 10zm-2.47 5.25a.75.75 0 011.06 1.06l-.53.53a.75.75 0 01-1.06-1.06l.53-.53zM5.72 14.97a.75.75 0 011.06 1.06l-.53.53a.75.75 0 11-1.06-1.06l.53-.53zM10 16a.75.75 0 01.75.75V18a.75.75 0 01-1.5 0v-1.25A.75.75 0 0110 16z" />
              <path d="M10 6.25A3.75 3.75 0 1013.75 10 3.75 3.75 0 0010 6.25zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
