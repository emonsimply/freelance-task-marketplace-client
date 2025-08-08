import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../components/firebase.init";
import profilePhoto from "../assets/profile-picture.png";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(" ");
  // const [successMessage, setSuccessMessage] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    setErrorMessage("");

    if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password must include an uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must include a lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        // setSuccessMessage(true);
        Swal.fire({
          // position: "top-end",
          icon: "success",
          title: "Registration completed successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        const profile = {
          displayName: name,
          photoURL: photoURL || profilePhoto,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log("Profile updated successfully");
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });
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
          Register
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            name="photoURL"
            className="input input-bordered w-full"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered w-full"
            required
          />
          <button
            type="submit"
            className="btn w-full rounded-full bg-green-500 hover:bg-green-600 text-white"
          >
            Register
          </button>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-1 text-center">
              {errorMessage}
            </p>
          )}
        </form>

        <div className="divider">OR</div>

        <button className="btn w-full rounded-full flex items-center justify-center gap-2 bg-white border border-green-300 hover:bg-green-100 text-black">
          <FcGoogle className="text-xl" />
          Sign up with Google
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-500 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
