import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40" // Replace with the profile image source
          alt="Profile"
          className="rounded-full"
        />
        <div className="ml-2">
          <h2 className="font-semibold text-blue-900">Welcome back ✌️</h2>
          <h2 className="text-xl font-bold text-blue-600">Ramy Fathi</h2>
        </div>
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-bold text-blue-600">Yalla</span>
        <div className="ml-4">
          <button className="relative">
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
            <img
              src="https://via.placeholder.com/20" // Replace with the bell icon source
              alt="Notifications"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
