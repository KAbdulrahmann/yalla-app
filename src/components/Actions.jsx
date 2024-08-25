import React from "react";

function Actions() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/40" // Replace with the send icon source
          alt="Send"
        />
        <span>Send</span>
      </button>
      <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/40" // Replace with the request icon source
          alt="Request"
        />
        <span>Request</span>
      </button>
      <button className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/40" // Replace with the load balance icon source
          alt="Load Balance"
        />
        <span>Load Balance</span>
      </button>
    </div>
  );
}

export default Actions;
