// TODO
// remove  **_Languages._** from language data
// for some reason, data is fetched three times on mount?

import React, { useEffect, useState } from "react";

function GenerateNPCRandomly(props) {
  const [npcInfo, setNpcInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const raceURL = "https://api.open5e.com/races/";
  //languages will be pulled out of the race data
  const classURL = "https://api.open5e.com/classes/";
  // weapons proficiency and spellcasting ability comes
  // from class data

  // hardcoded name data for now, will eventually separate by race:
  // names from https://www.fantasynamegenerators.com/
  const names = [
    "Nhisher Dakol",
    "Jarem Dhahra",
    "Brukvirn Heavysword",
    "Tekvulm Havenbinder",
    "Glibel Sig",
    "Gor Kirkuz",
    "Rorcam Sunwood",
    "Ron Evenstone",
    "Mam-Ziohputh Rezdanzuld",
    "Fen Gernuve",
    "Shia Chin",
    "Mium Siaom",
    "Frabrainrear Burguhu",
    "Frilbu Rirgoci",
  ];

  useEffect(() => {
    Promise.all([
      fetch(raceURL).then((res) => res.json()),
      fetch(classURL).then((res) => res.json()),
    ])
      .then((data) => {
        setNpcInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function randomize(arr) {
    if (arr.length > 0) {
      const arrLength = arr.length;
      const random_index = Math.floor(Math.random() * arrLength);
      return random_index;
    }
  }

  return (
    <main className="randomized-npc-info">
      <p>Hello from GenerateNPCRandomly</p>
      <p>
        <span>Name: </span>
        {names[randomize(names)]}
      </p>
      {isLoading ? (
        <p>Generating Info...</p>
      ) : (
        <div className="displayNPCInfo">
          <p>
            <span>Race: </span>

            {
              npcInfo[0].results[
                Math.floor(Math.random() * npcInfo[0].results.length)
              ].name
            }
          </p>
          <p>
            <span>Languages: </span>
            {
              npcInfo[0].results[
                Math.floor(Math.random() * npcInfo[0].results.length)
              ].languages
            }
          </p>
          <p>
            <span>Class: </span>
            {
              npcInfo[1].results[
                Math.floor(Math.random() * npcInfo[1].results.length)
              ].name
            }
          </p>
        </div>
      )}
    </main>
  );
}

export default GenerateNPCRandomly;
