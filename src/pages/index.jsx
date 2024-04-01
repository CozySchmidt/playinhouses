import Image from "next/image";
import { useState } from "react";
import Dropdown from "../components/Dropdown";
import RevampedDropdown from "@/components/revamped_Dropdown";

export default function Home({ championNames }) {
  const format = [
    { id: 1, name: "4v4", count: 4, unavailable: false },
    { id: 2, name: "5v5", count: 5, unavailable: false },
  ];
  const [selectedFormat, setSelectedFormat] = useState(format[0]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    const randomChampionNames = championNames.slice(0, 30);
    return randomChampionNames;
  }

  const generateTeams = () => {
    const shuffledNames = shuffle(championNames);

    setTeam1(shuffledNames.slice(0, 15));
    setTeam2(shuffledNames.slice(15, 30));
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
    <div className="bg-league_blue_header h-screen ">
      <div className="p-5">
        <p className="font-bold text-yellow-600 text-center text-3xl font-beaufortheavyitalic">
          InHouses
        </p>
        <div className="p-20">
          <div className="flex justify-between space-x-4 mb-4">
            <div className="w-1/3 rounded-md font-beaufortheavy">
              {Array.from({ length: selectedFormat.count }).map((_, i) => (
                <div key={i} className="flex justify-end items-center mb-4 ">
                  {isGenerated && (
                    <>
                      <img
                        className="mr-4"
                        src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${team1[i]}.png`}
                        alt={team1[i]}
                        title={team1[i]}
                        width="55"
                        height="55"
                      />
                      <img
                        className=""
                        src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${
                          team1[selectedFormat.count === 4 ? i + 4 : i + 5]
                        }.png`}
                        alt={team1[selectedFormat.count === 4 ? i + 4 : i + 5]}
                        title={
                          team1[selectedFormat.count === 4 ? i + 4 : i + 5]
                        }
                        width="55"
                        height="55"
                      />
                      <img
                        className="mr-4 ml-4"
                        src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${
                          team1[selectedFormat.count === 4 ? i + 8 : i + 10]
                        }.png`}
                        alt={team1[selectedFormat.count === 4 ? i + 8 : i + 10]}
                        title={
                          team1[selectedFormat.count === 4 ? i + 8 : i + 10]
                        }
                        width="55"
                        height="55"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="w-1/3 ">
              {Array.from({ length: selectedFormat.count }).map((_, i) => (
                <div key={i} className="grid grid-cols-2 gap-9 mb-6">
                  <input
                    type="text"
                    placeholder="Enter name"
                    name={`player${2 * i + 1}`}
                    className="h-12 text-2xl bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-beaufortheavy"
                    value={inputValue[`player${2 * i + 1}`]}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    placeholder="Enter name"
                    name={`player${2 * i + 2}`}
                    className="h-12 text-2xl bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 font-beaufortheavy"
                    value={inputValue[`player${2 * i + 2}`]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <div className="flex flex-row justify-between items-center relative">
                <button
                  className="bg-yellow-600  hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded font-beaufortheavy"
                  onClick={() => {
                    generateTeams();
                    setIsGenerated(true);
                  }}
                >
                  Generate
                </button>
                <RevampedDropdown
                  selectedFormat={selectedFormat}
                  setSelectedFormat={setSelectedFormat}
                  format={format}
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                />
                <button
                  className="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-beaufortheavy"
                  onClick={() => {
                    resetTeams();
                    resetNames();
                    setIsGenerated(false);
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="w-1/3 rounded-md font-beaufortheavy">
              {Array.from({ length: selectedFormat.count }).map((_, i) => (
                <div key={i} className="flex items-start items-center mb-4">
                  {isGenerated && (
                    <>
                      <img
                        className="mr-4"
                        src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${team2[i]}.png`}
                        alt={team2[i]}
                        title={team2[i]}
                        width="55"
                        height="55"
                      />
                      <img
                        className=""
                        src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${
                          team2[selectedFormat.count === 4 ? i + 4 : i + 5]
                        }.png`}
                        alt={team2[selectedFormat.count === 4 ? i + 4 : i + 5]}
                        title={
                          team2[selectedFormat.count === 4 ? i + 4 : i + 5]
                        }
                        width="55"
                        height="55"
                      />
                      <img
                        className="mr-4 ml-4"
                        src={`https://ddragon.leagueoflegends.com/cdn/14.6.1/img/champion/${
                          team2[selectedFormat.count === 4 ? i + 8 : i + 10]
                        }.png`}
                        alt={team2[selectedFormat.count === 4 ? i + 8 : i + 10]}
                        title={
                          team2[selectedFormat.count === 4 ? i + 8 : i + 10]
                        }
                        width="55"
                        height="55"
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
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
