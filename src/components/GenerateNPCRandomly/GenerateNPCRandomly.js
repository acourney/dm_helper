// TODO
// remove  **_Languages._** from language data
// for some reason, data is fetched three times on mount?

import React, { useEffect, useState } from "react";

function GenerateNPCRandomly(props) {
  const [race, setRace] = useState([]);
  const [npcClass, setNpcClass] = useState([]);

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

  // FOR NOW: HARDCODED DATA SO I DON'T OVERLOAD THEIR API

  // pull from race api
  useEffect(() => {
    fetch(raceURL)
      .then((res) => res.json())
      .then((raceData) => {
        setRace(raceData);
      })
      .catch((err) => console.error(`Oops, something went wrong: ${err}`));
  }, []);

  // pull from class api
  useEffect(() => {
    fetch(classURL)
      .then((res) => res.json())
      .then((classData) => {
        setNpcClass(classData);
      })
      .catch((err) => console.error(`Oops, something went wrong: ${err}`));
  }, []);

  function randomize(arr) {
    const arrLength = arr.length;
    const random_index = Math.floor(Math.random() * arrLength);
    return random_index;
  }

  return (
    <main className="randomized-npc-info">
      <p>Hello from GenerateNPCRandomly</p>
      <p>
        <span>Name: </span>
        {names[randomize(names)]}
      </p>
      <p>
        <span>Race: </span>

        {race.results[randomize(race.results)].name}
      </p>
      <p>
        <span>Languages: </span>
        {race.results[randomize(race.results)].languages}
      </p>
      <p>
        <span>Class: </span>
        {npcClass.results[randomize(npcClass.results)].name}
      </p>
    </main>
  );
}

export default GenerateNPCRandomly;
