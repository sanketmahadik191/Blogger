// import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.jpg";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      {/* Container */}
      <div className="flex w-full max-w-5xl overflow-hidden rounded-lg bg-white shadow-lg md:flex-row flex-col">
        
        {/* Left Side: Login Form */}
        <div className="w-full p-16 md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome Back 👋
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue your journey!
          </p>

          {/* Input Fields */}
          <form className="mt-6">
            <div>
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="mt-1 w-full rounded-md border px-3 py-2 text-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-600">Password</label>
              <input
                type="password"
                placeholder="********"
                className="mt-1 w-full rounded-md border px-3 py-2 text-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <button className="mt-6 w-full rounded-md bg-purple-600 px-4 py-2 text-white transition hover:bg-purple-700">
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-4 text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-purple-600 hover:underline">
             <Link to='/signup'> Sign Up </Link>
            </a>
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="relative hidden md:block md:w-1/2">
          <img
            src={loginImg}
            alt="Login Background"
            className="h-full w-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
