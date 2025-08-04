import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
   <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-bold text-green-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-2">Page Not Found</h2>
      <p className="text-green-600 mb-6">Sorry, the page you are looking for doesn't exist.</p>
      <Link
        to="/"
        className="btn bg-green-500 hover:bg-green-600 text-white px-6 rounded-full"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
