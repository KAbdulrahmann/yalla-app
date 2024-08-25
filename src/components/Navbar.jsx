import React from "react";
import notification from '../assets/notification.svg'

function Navbar() {
  return (
    <div className="fixed bg-white w-full flex top-0 justify-between p-4 align-center">
      <div className="flex basis-1/3  items-center">
        <img
          src="https://via.placeholder.com/40" // Replace with the profile image source
          alt="Profile"
          className="rounded-full"
        />
        <div className="ml-2">
          <h2 className="font-semibold text-[10px] text-blue-900">Welcome back ✌️</h2>
          <h2 className="text-xl font-bold text-[14px] text-blue-600">Ramy</h2>
        </div>
      </div>
      <div className="flex basis-1/3 justify-center">
        <span className="text-2xl font-bold text-blue-600">Yalla</span>
      </div>
      <div className="flex basis-1/3 items-center justify-end">
        <div className="ml-4">
          <button className="relative">
            <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
            <img
              src={notification} // Replace with the bell icon source
              alt="Notifications"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
