import React from "react";

function Tabs() {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-around p-4 bg-white shadow-lg">
      <button className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/30" // Replace with the home icon source
          alt="Home"
        />
        <span className="text-xs">Home</span>
      </button>
      <button className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/30" // Replace with the money icon source
          alt="Money"
        />
        <span className="text-xs">Money</span>
      </button>
      <button className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/30" // Replace with the near me icon source
          alt="Near Me"
        />
        <span className="text-xs">Near Me</span>
      </button>
      <button className="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/30" // Replace with the help icon source
          alt="Help"
        />
        <span className="text-xs">Help</span>
      </button>
    </div>
  );
}

export default Tabs;
