import React from "react";
import { DataContext } from "../../dataContext";
import { useState, useContext, useEffect } from "react";

function MonsterGenerator(props) {
  const { formState, setFormState } = useContext(DataContext);

  const [monsterData, setMonsterData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [randomMonster, setRandomMonster] = useState({});

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

  function handleClick() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMonsterData(data);
        console.log(data);
        setLoading(false);
        // console.log(raceData.results);
      })
      .catch((err) => console.error(`Oops, something went wrong: ${err}`));
    console.log("you requested a new monster");
  }

  useEffect(() => {
    if (isLoading === false) {
      let randomMonster =
        monsterData.results[
          Math.floor(Math.random() * monsterData.results.length)
        ];
      setRandomMonster(randomMonster);
    }
  }, [isLoading]);

  return (
    <main className="monster-generator">
      {isLoading ? (
        <p>Generating Info...</p>
      ) : (
        <div className="displayNPCInfo">
          <p>
            <span>Monster Type: </span>
            {randomMonster.name}
          </p>
          <p>
            <span>Challenge Rating: </span>
            {randomMonster["challenge_rating"]}
          </p>
          <p>
            <span>HP: </span>
            {randomMonster["hit_points"]}
          </p>
          <p>
            <span>Abilities: </span>
            {/* {randomMonster["special_abilities"].forEach((ability) => {
              console.log(ability.desc);
            })} */}
          </p>
          <button onClick={handleClick}>Generate New Monster</button>
        </div>
      )}
    </main>
  );
}

export default MonsterGenerator;
