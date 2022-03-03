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

  // // pull from race api
  // useEffect(() => {
  //   fetch(raceURL)
  //     .then((res) => res.json())
  //     .then((raceData) => {
  //       setRace(raceData);
  //     })
  //     .catch((err) => console.error(`Oops, something went wrong: ${err}`));
  // }, []);

  // // pull from class api
  // useEffect(() => {
  //   fetch(classURL)
  //     .then((res) => res.json())
  //     .then((classData) => {
  //       setNpcClass(classData);
  //     })
  //     .catch((err) => console.error(`Oops, something went wrong: ${err}`));
  // }, []);

  useEffect(() => {
    Promise.all([
      fetch(raceURL).then((res) => res.json()),
      fetch(classURL).then((res) => res.json()),
    ])
      .then((data) => {
        // console.log(data);
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

  // function checkDataLength(arr1, arr2) {
  //   if (arr1.length <= 0 && arr2.length <= 0) {
  //     return false;
  //   } else if (arr1.length > 0 && arr2.length > 0) {
  //     return true;
  //   }
  // }

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

            {npcInfo[0].results[0].name}
            {/* {race.results[randomize(race.results)].name} */}
            {console.log(npcInfo)}
          </p>
          <p>
            <span>Languages: </span>
            {npcInfo[0].results[0].languages}
            {/* {race.results[randomize(race.results)].languages} */}
          </p>
          <p>
            <span>Class: </span>
            {npcInfo[1].results[0].name}
          </p>
        </div>
      )}

      {/* {checkDataLength(race.results, npcClass.results) ? (
        <div className="displayNPCInfo">
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
        </div>
      ) : null} */}
    </main>
  );
}

export default GenerateNPCRandomly;
