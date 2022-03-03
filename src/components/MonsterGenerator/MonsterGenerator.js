import React from "react";
import { DataContext } from "../../dataContext";
import { useState, useContext, useEffect } from "react";

function MonsterGenerator(props) {
  const { formState, setFormState } = useContext(DataContext);

  const [monsterData, setMonsterData] = useState({});
  const [isLoading, setLoading] = useState(true);

  const challenge_rating = formState.partyLevel;
  let URL = "";

  const randomPage = Math.floor(Math.random() * 22);

  formState.partyLevel
    ? (URL = `https://api.open5e.com/monsters/?challenge_rating=${challenge_rating}`)
    : (URL = `https://api.open5e.com/monsters/?page=${randomPage}`);

  console.log(URL);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMonsterData(data);
        console.log(data);
        setLoading(false);
        // console.log(raceData.results);
      })
      .catch((err) => console.error(`Oops, something went wrong: ${err}`));
  }, []);

  return (
    <main className="monster-generator">
      <p>Hello from MonsterGenerator</p>
      {isLoading ? (
        <p>Generating Info...</p>
      ) : (
        <div className="displayNPCInfo">
          <p>
            <span>Monster Type: </span>
            {
              monsterData.results[
                Math.floor(Math.random() * monsterData.results.length)
              ].name
            }
          </p>
          <p>
            <span>Challenge Rating: </span>
            {
              monsterData.results[
                Math.floor(Math.random() * monsterData.results.length)
              ].challenge_rating
            }
          </p>
          <p>
            <span>HP: </span>
            {
              monsterData.results[
                Math.floor(Math.random() * monsterData.results.length)
              ].hit_points
            }
          </p>
          <p>
            <span>Abilities: </span>
          </p>
        </div>
      )}
    </main>
  );
}

export default MonsterGenerator;
