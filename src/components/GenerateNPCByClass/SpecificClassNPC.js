import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SpecificClassNPC(props) {
  let randRaceIndex = 0;

  const { npcClass } = useParams();
  const [npcInfo, setNpcInfo] = useState([]);
  const [randomRace, setRandomRace] = useState({});
  const [language, setLanguage] = useState("");
  const [skills, setSkills] = useState("");

  const [isLoading, setLoading] = useState(true);

  const URL = `https://api.open5e.com/classes/?name=${npcClass}`;
  const raceURL = "https://api.open5e.com/races/";

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
    Tiefling: [
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
      fetch(URL).then((res) => res.json()),
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
    if (isLoading === false) {
      randRaceIndex = Math.floor(Math.random() * npcInfo[0].results.length);
      setRandomRace(npcInfo[0].results[randRaceIndex]);
    }
  }

  useEffect(() => {
    if (isLoading === false) {
      randRaceIndex = Math.floor(Math.random() * npcInfo[0].results.length);
      setRandomRace(npcInfo[0].results[randRaceIndex]);
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

  useEffect(() => {
    if (isLoading === false) {
      const editedLanguage = randomRace.languages.substring(
        17,
        randomRace.languages.length
      );
      setLanguage(editedLanguage);
    }
  }, [randomRace]);

  useEffect(() => {
    if (isLoading === false) {
      const npcSkill = npcInfo[1].results[0]["prof_skills"];

      setSkills(npcSkill);
    }
  }, [isLoading]);

  return (
    <main>
      {isLoading ? (
        <p>Generating Info...</p>
      ) : (
        <div className="displayNPCInfo">
          <p>
            <span>Name: </span>
            {chooseName(randomRace.name)}
          </p>
          <p>
            <span>Race: </span>
            {randomRace.name}
          </p>
          <p>
            <span>Languages: </span>
            {language}
          </p>
          <p>
            <span>Class: </span>
            {npcClass}
          </p>
          <p>
            <span>Skills: </span>
            {skills}
          </p>
          <button onClick={handleClick}>Generate New NPC</button>
        </div>
      )}
    </main>
  );
}

export default SpecificClassNPC;
