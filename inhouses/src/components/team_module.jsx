import React from "react";
import { useState } from "react";

function team_module({
  championNames,
  generateTeams,
  team1,
  team2,
  resetTeams,
}) {
  return (
    <div className="flex justify-between space-x-4 items-stretch">
      <div className="w-1/3 bg-white rounded-md">{team1}</div>
      <div className="w-1/3">
        <div className="grid grid-cols-2 gap-9">
          {/* Left side inputs */}
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          {/* Right side inputs */}
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <input
            type="text"
            placeholder="Enter name"
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Jane Doe"'
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={generateTeams}
          >
            Generate
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={resetTeams}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="w-1/3 bg-white rounded-md">{team2}</div>
    </div>
  );
}

export default team_module;
