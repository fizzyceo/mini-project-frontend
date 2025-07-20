import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submit() {
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        alert("Login successful");
        window.location.href = "/";
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  }
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700  flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="bg-white w-1/3 h-[60%] flex flex-col items-center pt-5 rounded-xl gap-8">
        <div className="text-center">
          <h1 className="font-bold text-2xl">TaskFlow</h1>
          <p className="text-gray-600">sign in to your account</p>
        </div>
        <div className="flex flex-col gap-4 w-[90%] ">
          <div className="flex flex-col gap-1 ">
            <label className="text-sm font-semibold "> Email Address</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="enter your email"
              className="border-gray-300 border p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-sm font-semibold ">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="enyer your password"
              className="border-gray-300 border p-2 rounded-lg"
            />
          </div>
          <button
            onClick={submit}
            className="bg-blue-700 rounded-lg h-9 text-white text-sm font-semibold cursor-pointer"
          >
            Sign In
          </button>
          <p className="text-center text-gray-400">
            Don't have an account{" "}
            <a className="text-blue-700 font-semibold" href="/register">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
