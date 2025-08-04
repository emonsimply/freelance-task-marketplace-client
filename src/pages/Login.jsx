import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          <button
            type="submit"
            className="btn w-full bg-green-500 hover:bg-green-600 text-white"
          >
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button className="btn w-full flex items-center justify-center gap-2 bg-white border border-green-300 hover:bg-green-100 text-black">
          <FcGoogle className="text-xl" />
          Login with Google
        </button>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-green-500 hover:underline font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
