import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GenerateNPCByClass(props) {
  const [npcClasses, setNpcClasses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // images from dndbeyond.com
  const images = {
    Barbarian: "https://imgur.com/yUzipDO.png",
    Bard: "https://imgur.com/Z3eGzsZ.png",
    Cleric: "https://imgur.com/ZcnoYHC.png",
    Druid: "https://imgur.com/RKiYOwC.png",
    Fighter: "https://imgur.com/Wir5NjJ.png",
    Monk: "https://imgur.com/Cw3ArFM.png",
    Paladin: "https://imgur.com/FGorsUq.png",
    Ranger: "https://imgur.com/VPYiHag.png",
    Rogue: "https://imgur.com/FvTH3Mt.png",
    Sorcerer: "https://imgur.com/LKVRYmN.png",
    Warlock: "https://imgur.com/NtZYCdY.png",
    Wizard: "https://imgur.com/o7zFMtk.png",
  };

  const URL = "https://api.open5e.com/classes/";
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setNpcClasses(data);
        console.log(data);
        setLoading(false);
        // console.log(raceData.results);
      })
      .catch((err) => console.error(`Oops, something went wrong: ${err}`));
  }, []);

  return (
    <main className="main-card-container">
      {isLoading ? (
        <p>Generating Info...</p>
      ) : (
        <section className="npcClassCards">
          {npcClasses.results.map((npcClass, index) => (
            <Link to={`/generate-${npcClass.name}`} key={index}>
              <div className="card">
                <div className="card-image">
                  <img
                    id="class-image"
                    src={images[`${npcClass.name}`]}
                    alt=""
                  />
                </div>
                <div className="card-title">
                  <h3>{npcClass.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
}

export default GenerateNPCByClass;
