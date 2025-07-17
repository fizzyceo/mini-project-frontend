import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  async function submit() {
    if (
      firstName &&
      lastName &&
      username &&
      email &&
      password &&
      confirmPassword
    ) {
      if (password === confirmPassword) {
        //create the object to send to the backend
        let displayName = firstName + " " + lastName;
        let newUser = {
          displayName,
          userName: username,
          email,
          password,
        };
        const response = await axios.post(
          "http://localhost:5000/auth/register",
          newUser
        );
        if (response.status === 201) {
          alert("User created successfully");
          window.location.href = "/login";
        }
      }
    }
  }
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-700  flex items-center justify-center h-screen w-screen overflow-hidden">
      <div className="bg-white w-1/3  flex flex-col items-center pt-5 py-5 rounded-xl gap-8">
        <div className="text-center">
          <h1 className="font-bold text-2xl">TaskFlow</h1>
          <p className="text-gray-600">Create your account</p>
        </div>
        <div className="flex flex-col gap-4 w-[90%] ">
          <div className="flex flex-row">
            <div>
              <label className="text-sm font-semibold "> First name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="enter your first name"
                className="border-gray-300 border p-2 rounded-lg"
              />
            </div>
            <div>
              <label className="text-sm font-semibold "> Last name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="enter your last name"
                className="border-gray-300 border p-2 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-sm font-semibold "> username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="enter your username"
              className="border-gray-300 border p-2 rounded-lg"
            />
          </div>
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
              placeholder="enter your password"
              className="border-gray-300 border p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-sm font-semibold ">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="enter your password"
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
            Already have an accout{"   "}
            <a className="text-blue-700 font-semibold" href="/login">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
