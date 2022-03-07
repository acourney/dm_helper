// TODO
// remove  **_Languages._** from language data
// for some reason, data is fetched three times on mount?

import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { matchRoutes } from "react-router-dom";

function GenerateNPCRandomly(props) {
  let randRaceIndex = 0;
  let randClassIndex = 0;

  const [npcInfo, setNpcInfo] = useState([]);
  const [randomRace, setRandomRace] = useState({});
  const [randomClass, setRandomClass] = useState({});

  const [isLoading, setLoading] = useState(true);

  const raceURL = "https://api.open5e.com/races/";
  //languages will be pulled out of the race data
  const classURL = "https://api.open5e.com/classes/";
  // weapons proficiency and spellcasting ability comes
  // from class data

  // hardcoded name data for now, will eventually separate by race:
  // names from https://www.fantasynamegenerators.com/
  const names = {
    Dwarf: [
      "Thogron Blackkind",
      "Murrik Everbottom",
      "Grilkyl Hammerward",
      "Tydohr Ironfury",
      "Kramrim Boulderhand",
      "Bharmund Strelleger",
      "Ranbelle Mertherk",
      "Anla Brodikohk",
      "Bonnmura Lezzug",
      "Nesgwyn Drothgavun",
    ],
    Elf: [
      "Sarquinal Embermoon",
      "Elgolor Stonemoon",
      "Qimaris Wildmight",
      "Aeydark Azurefond",
      "Miralamin Elmhold",
      "Elanorin Gilphelestrol",
      "Sargolor Drexestrithri",
      "Zinnorin Quunnixo",
    ],
    Halfling: [
      "Uriwrick Mildhill",
      "Sanwan Marblegrove",
      "Golan Teatop",
      "Laras Brushbrace",
      "Quinnan Longwhistle",
      "Diacaryn Grandbrand",
      "Lidwyse Cloudfound",
      "Dialyse Greatcheeks",
      "Vertina Fatspirit",
      "Thergwen Grasscreek",
    ],
    Human: [
      "Nhisher Dakol",
      "Jarem Dhahra",
      "Brukvirn Heavysword",
      "Christofor",
      "Donatien",
      "Gor Kirkuz",
      "Abelard",
      "Manolito",
      "Marquisha",
      "Malina",
      "Simonetta",
      "Rorcam Sunwood",
      "Ron Evenstone",
      "Chi Grivridz",
      "Fen Gernuve",
      "Shia Chin",
      "Mium Siaom",
      "Nothi Votsk",
      "Tia Siaom",
    ],
    Dragonborn: [
      "Merthinthenad Zraghull",
      "Numbuun Dozire",
      "Kiathtolurruar Xarkax",
      "Yethtusad Faerdorim",
      "Terthorid Bacrath",
      "Klelkaasamek Fenvys",
      "Oldacujan Valyassa",
      "Elxirejuth Lilodrish",
      "Myixikmir Narith",
      "Klemphad Wrathyra",
    ],
    Gnome: [
      "Arixim Bellowtop",
      "Yeben Babblebottom",
      "Sadon Lastwander",
      "Almin Lightcollar",
      "Ianziver Strongligt",
      "Isoqaryn Thunderstamp",
      "Myna Pappin",
      "Zinmila Uffonimp",
      "Daphitina Damblesamble",
      "Reqys Pigglena",
      "Myza Nepplebapple",
    ],
    "Half-Elf": [
      "Vicros",
      "Yortorin",
      "Iloril",
      "Pangotin",
      "Jamtumil",
      "Zylfinas",
      "Woltrana",
      "Faeqwyn",
      "Carhana",
      "Yllmythe",
    ],
    "Half-Orc": [
      "Komodurk",
      "Oguask",
      "Trukenars",
      "Marubash",
      "Ororim",
      "Kani",
      "Gijenur",
      "Olomi",
      "Kirasha",
      "Rahkagh",
      "Gynane",
    ],
    Tielfling: [
      "Ebakas",
      "Kyron",
      "Zorlius",
      "Thyira",
      "Ervir",
      "Aetcis",
      "Zevine",
      "Velrali",
      "Yusolis",
      "Shauphis",
      "Debauchery",
      "Timeless",
      "Mystery",
      "Extreme",
      "Song",
      "Suffering",
      "Expertise",
    ],
  };

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

  function handleClick() {
    console.log("you clicked generate new npc button");

    if (isLoading === false) {
      randRaceIndex = Math.floor(Math.random() * npcInfo[0].results.length);
      randClassIndex = Math.floor(Math.random() * npcInfo[1].results.length);
      setRandomRace(npcInfo[0].results[randRaceIndex]);
      setRandomClass(npcInfo[1].results[randClassIndex]);
    }
  }

  useEffect(() => {
    if (isLoading === false) {
      randRaceIndex = Math.floor(Math.random() * npcInfo[0].results.length);
      randClassIndex = Math.floor(Math.random() * npcInfo[1].results.length);
      setRandomRace(npcInfo[0].results[randRaceIndex]);
      setRandomClass(npcInfo[1].results[randClassIndex]);
    }
  }, [isLoading]);

  function chooseName(randomRace) {
    switch (randomRace) {
      case "Human":
        return names["Human"][
          Math.floor(Math.random() * names["Human"].length)
        ];
      case "Dwarf":
        return names["Dwarf"][
          Math.floor(Math.random() * names["Dwarf"].length)
        ];
      case "Elf":
        return names["Elf"][Math.floor(Math.random() * names["Elf"].length)];
      case "Halfling":
        return names["Halfling"][
          Math.floor(Math.random() * names["Halfling"].length)
        ];
      case "Dragonborn":
        return names["Dragonborn"][
          Math.floor(Math.random() * names["Dragonborn"].length)
        ];
      case "Gnome":
        return names["Gnome"][
          Math.floor(Math.random() * names["Gnome"].length)
        ];
      case "Half-Elf":
        return names["Half-Elf"][
          Math.floor(Math.random() * names["Half-Elf"].length)
        ];
      case "Half-Orc":
        return names["Half-Orc"][
          Math.floor(Math.random() * names["Half-Orc"].length)
        ];
      case "Tiefling":
        return names["Tiefling"][
          Math.floor(Math.random() * names["Tiefling"].length)
        ];
    }
  }

  return (
    <main className="randomized-npc-info">
      {isLoading === false ? (
        <div className="displayNPCInfo">
          <p>
            <span>Name: </span>
            {chooseName(randomRace.name)}
            {/* {
                names[randomRace.name][
                  Math.floor(Math.random() * names[randomRace.name].length)
                ]
              } */}
            {/* {console.log(names[randomRace.name].length > 0)} */}
            {/* {console.log(
                names["Dragonborn"][
                  Math.floor(Math.random() * names["Dragonborn"].length)
                ]
              )}
              {console.log(names[randomRace.name])}
              {console.log(
                names[randomRace.name][
                  Math.floor(Math.random() * names[randomRace.name].length)
                ]
              )} */}
          </p>
          <p>
            <span>Race: </span>

            {randomRace.name}
          </p>
          <p>
            <span>Languages: </span>
            {randomRace.languages}
          </p>
          <p>
            <span>Class: </span>
            {randomClass.name}
          </p>
          <button id="generate-random-npc-button" onClick={handleClick}>
            Generate New NPC
          </button>
        </div>
      ) : (
        <>
          <p>Generating Info...</p>
        </>
      )}
    </main>
  );
}

export default GenerateNPCRandomly;
