import { signInWithEmailAndPassword } from "firebase/auth";
import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { auth } from "../components/firebase.init";
import { UserContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { setUser } = use(UserContext);

  const [errorMessage, setErrorMessage] = useState(" ");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage(false);
    setSuccessMessage(false);

    // login logic here
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        setUser(result.user);
        setSuccessMessage(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center my-10">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered w-full"
            required
          />
          <a href="#" className="hover:underline">
            Forgot password
          </a>
          <button
            type="submit"
            className="btn w-full mt-3 rounded-full bg-green-500 hover:bg-green-600 text-white"
          >
            Login
          </button>
          {errorMessage && (
            <p className="text-red-500 text-sm mt-1 text-center">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm mt-1 text-center">
              Login successful!
            </p>
          )}
        </form>

        <div className="divider">OR</div>

        <button className="btn w-full rounded-full flex items-center justify-center gap-2 bg-white border border-green-300 hover:bg-green-100 text-black">
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
