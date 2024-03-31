import Image from "next/image";
import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function Home() {
  
  const people = [
    { id: 1, name: "4v4", count: 4, unavailable: false },
    { id: 2, name: "5v5", count: 5, unavailable: false },
  ];
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

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

  return (
    <div className="bg-league_blue_header h-screen">
      <div className="p-5">
        <p className="font-bold text-league_gold text-center text-3xl font-beaufortheavyitalic">
          InHouses
        </p>
        <div className="p-20">
          <div className="flex justify-between space-x-4 items-stretch mb-4">
            <div className="w-1/3 bg-white rounded-md"></div>
            <div className="w-1/3 ">
              {Array.from({ length: selectedPerson.count }).map((_, i) => (
                <div key={i} className="grid grid-cols-2 gap-9 mb-4">
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
              <div className="p-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Generate
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Reset
                </button>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-md"></div>
          </div>
          <div className="absolute bg-white rounded-md p-2">
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
