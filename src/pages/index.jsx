import Image from "next/image";
import TeamModule from "../components/team_module";
import { useState } from "react";

export default function Home({ championNames }) {
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
          <TeamModule
            championNames={championNames}
            generateTeams={generateTeams}
            team1={team1}
            team2={team2}
            resetTeams={resetTeams}
          />
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
