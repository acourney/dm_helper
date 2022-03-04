import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SpecificClassNPC(props) {
  const { npcClass } = useParams();
  const [npcInfo, setNpcInfo] = useState([]);
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
      fetch(URL).then((res) => res.json()),
      fetch(raceURL).then((res) => res.json()),
    ])
      .then((data) => {
        setNpcInfo(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick() {
    Promise.all([
      fetch(URL).then((res) => res.json()),
      fetch(raceURL).then((res) => res.json()),
    ])
      .then((data) => {
        setNpcInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main>
      {isLoading ? (
        <p>Generating Info...</p>
      ) : (
        <div className="displayNPCInfo">
          <p>
            <span>Name: </span>
            {
              names[
                npcInfo[1].results[
                  Math.floor(Math.random() * npcInfo[1].results.length)
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
              npcInfo[1].results[
                Math.floor(Math.random() * npcInfo[1].results.length)
              ].name
            }
          </p>
          <p>
            <span>Languages: </span>
            {
              npcInfo[1].results[
                Math.floor(Math.random() * npcInfo[1].results.length)
              ].languages
            }
          </p>
          <p>
            <span>Class: </span>
            {npcClass}
          </p>
          <button onClick={handleClick}>Generate New NPC</button>
        </div>
      )}
    </main>
  );
}

export default SpecificClassNPC;
