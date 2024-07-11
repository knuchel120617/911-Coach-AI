import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Buttons from "../Button/Buttons";

const Signin = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement signup logic here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Log into your account</h1>
      <p className="text-sm text-gray-600 mb-4">
        You don’t have an account?{" "}
        <a href="/login" className="text-green-500 hover:underline">
          Sign up
        </a>
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2">
            Email
          </label>
          <div className="relative">
            <EmailIcon className="absolute left-3 top-3 text-[#9cdfd3]" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full lg:w-[600px] rounded-full pl-10 border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <LockIcon className="absolute left-3 top-3 text-[#9cdfd3]" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full lg:w-[600px] rounded-full pl-10 border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#9cdfd3]"
              required
            />
          </div>
        </div>
        <Buttons
          primary
          type="submit"
          className="w-full bg-[#009379] hover:bg-[#4be5c9] text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#41a391]"
        >
          Sign Up
        </Buttons>
      </form>
    </div>
  );
};

export default Signin;
