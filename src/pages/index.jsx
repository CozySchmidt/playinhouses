import Image from "next/image";
import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function Home({ championNames }) {
  const people = [
    { id: 1, name: "4v4", count: 4, unavailable: false },
    { id: 2, name: "5v5", count: 5, unavailable: false },
  ];
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

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

  function shuffle(championNames) {
    for (let i = championNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [championNames[i], championNames[j]] = [
        championNames[j],
        championNames[i],
      ];
    }
    const randomChampionNames = championNames.slice(0, 20);
    return randomChampionNames;
  }

  const generateTeams = () => {
    const shuffledNames = shuffle(championNames);

    setTeam1(shuffledNames.slice(0, 10).join(", "));
    setTeam2(shuffledNames.slice(10, 20).join(", "));
  };

  const resetTeams = () => {
    setTeam1([]);
    setTeam2([]);
  };

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="bg-league_blue_header h-screen">
      <div className="p-5">
        <p className="font-bold text-league_gold text-center text-3xl font-beaufortheavyitalic">
          InHouses
        </p>
        <div className="p-20">
          <div className="flex justify-between space-x-4 mb-4">
            <div className="w-1/3 bg-white rounded-md font-beaufortheavy">
              {team1}
            </div>
            <div className="w-1/3 ">
              {Array.from({ length: selectedPerson.count }).map((_, i) => (
                <div key={i} className="grid grid-cols-2 gap-9 mb-4">
                  <input
                    type="text"
                    placeholder="Enter name"
                    name={`player${2 * i + 1}`}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-beaufortheavy"
                    value={inputValue[`player${2 * i + 1}`]}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Enter name"
                    name={`player${2 * i + 2}`}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-beaufortheavy"
                    value={inputValue[`player${2 * i + 2}`]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <div className="flex flex-row justify-between items-center">
                <button
                  className="bg-league_gold hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded font-beaufortheavy"
                  onClick={generateTeams}
                >
                  Generate
                </button>
                <button
                  className="bg-league_gold hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-beaufortheavy"
                  onClick={() => {
                    resetTeams();
                    resetNames();
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-md font-beaufortheavy">
              {team2}
            </div>
          </div>
          <div className="bg-blue-500 absolute bg-white rounded-md p-2 font-beaufortheavy text-black">
            <Dropdown
              selectedPerson={selectedPerson}
              setSelectedPerson={setSelectedPerson}
              people={people}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/champion.json"
  );
  const data = await res.json();

  const championNames = Object.keys(data.data);

  return {
    props: {
      championNames,
    },
  };
}
