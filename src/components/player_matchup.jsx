import React from "react";


{/** not needed. Out of commission */}
function PlayerMatchup() {
  return (
    <div>
      {Array.from({ length: 1 }).map((_, i) => (
        <div key={i} className="grid grid-cols-2 gap-9">
          {/* Left side input */}
          <input
            type="text"
            placeholder="Enter name"
            name={`player${2 * i + 1}`}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
          {/* Right side input */}
          <input
            type="text"
            placeholder="Enter name"
            name={`player${2 * i + 2}`}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
      ))}
    </div>
  );
}

export default PlayerMatchup;
