import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GenerateNPCByClass(props) {
  const [npcClasses, setNpcClasses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const images = {
    monk: "https://imgur.com/Cw3ArFM.png",
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
                  <img id="class-image" src={images.monk} alt="" />
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
