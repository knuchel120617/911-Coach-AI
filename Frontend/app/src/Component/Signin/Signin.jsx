import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { login } from "../../Auth/Auth";
import Buttons from "../Button/Buttons";
import { Window } from "@mui/icons-material";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const naviage = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await login(email, password);
    console.log(data.userData._id);
    localStorage.setItem("token", data.accessToken);
    localStorage.setItem("userId", data.userData._id);
    console.log(localStorage.getItem("userId"));

    naviage("/menu");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Log into your account</h1>
      <p className="text-sm text-gray-600 mb-4">
        You don’t have an account?{" "}
        <a href="/signup" className="text-[#009379] hover:underline">
          Sign up
        </a>
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium mb-2" style={{ color: '#333333' }}>
            Email
          </label>
          <div className="relative">
            <EmailIcon className="absolute left-3 top-3 text-[#009379]" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full lg:w-[600px] rounded-xl pl-10 border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm font-medium mb-2" style={{ color: '#333333' }}>
            Password
          </label>
          <div className="relative">
            <LockIcon className="absolute left-3 top-3 text-[#009379]" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full lg:w-[600px] rounded-xl pl-10 border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#9cdfd3]"
              required
            />
          </div>
        </div>
        <Buttons
          primary
          type="submit"
          className="text-white bg-[#009379] px-6 py-3 border-none rounded-[10px] text-sm" 
          style={{ minWidth: "auto", width: "auto" }}
        >
          Sign In
        </Buttons>
      </form>
    </div>
  );
};

export default Signin;
