import { User } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="w-screen py-4 bg-white shadow-md shadow-[#5b5b5b42] flex justify-center items-center">
      <div className="w-3/4  flex justify-between items-center">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="profile flex items-center justify-center gap-3">
          <User
            size={32}
            color="#fff"
            className="bg-blue-600 rounded-full p-1  "
          />
          <h1>Username </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
