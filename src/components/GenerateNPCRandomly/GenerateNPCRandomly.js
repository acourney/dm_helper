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
  }

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

      {isLoading ? (
        <p>Generating Info...</p>
      ) : (
        <div className="displayNPCInfo">
          <p>
            <span>Name: </span>
            {
              names[
                npcInfo[0].results[
                  Math.floor(Math.random() * npcInfo[0].results.length)
                ].name
              ][
                npcInfo[0].results[
                  Math.floor(Math.random() * npcInfo[0].results.length)
                ].name.length
              ]
            }
          </p>
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
          <button onClick={handleClick}>Generate New NPC</button>
        </div>
      )}
    </main>
  );
}

export default GenerateNPCRandomly;
