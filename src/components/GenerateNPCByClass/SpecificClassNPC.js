import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SpecificClassNPC(props) {
  const { npcClass } = useParams();
  const [npcInfo, setNpcInfo] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const URL = `https://api.open5e.com/classes/?name=${npcClass}`;
  const raceURL = "https://api.open5e.com/races/";

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
