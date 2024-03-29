import React from "react";
import { useState } from "react";

function TeamModule({
  championNames,
  generateTeams,
  team1,
  team2,
  resetTeams,
}) {
  const [inputValue, setInputValues] = useState({
    player1: "",
    player2: "",
    player3: "",
    player4: "",
    player5: "",
    player6: "",
    player7: "",
    player8: "",
    player9: "",
    player10: "",
  });

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  const resetNames = () => {
    setInputValues({
      player1: "",
      player2: "",
      player3: "",
      player4: "",
      player5: "",
      player6: "",
      player7: "",
      player8: "",
      player9: "",
      player10: "",
    });
  };

  return (
    <div className="flex justify-between space-x-4 items-stretch">
      <div className="w-1/3 bg-white rounded-md">{team1}</div>
      <div className="w-1/3">
        <div className="grid grid-cols-2 gap-9">
          {/* Left side inputs */}
          <input
            type="text"
            placeholder="Enter name"
            name="player1"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player1}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player2}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player3}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player4}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player5}
            onChange={handleInputChange}
          />
          {/* Right side inputs */}
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player6}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player7}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player8}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player9}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Enter name"
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={inputValue.player10}
            onChange={handleInputChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={generateTeams}
          >
            Generate
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              resetTeams();
              resetNames();
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="w-1/3 bg-white rounded-md">{team2}</div>
    </div>
  );
}

export default TeamModule;
