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

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMonsterData(data);
        setLoading(false);
      })
      .catch((err) => console.error(`Oops, something went wrong: ${err}`));
  }, []);

  function handleClick() {
    if (isLoading === false) {
      let randomMonster =
        monsterData.results[
          Math.floor(Math.random() * monsterData.results.length)
        ];
      setRandomMonster(randomMonster);
    }
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
      {isLoading === false ? (
        <div className="displayNPCInfo">
          <p>
            <span>Monster: </span>
            {randomMonster.name}
          </p>
          <p>
            <span>Type: </span>
            {randomMonster.type}
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
            <span>Alignment: </span>
            {randomMonster.alignment}
          </p>
          <p>
            <span>Hit Dice: </span>
            {randomMonster["hit_dice"]}
          </p>
          <button onClick={handleClick}>Generate New Monster</button>
        </div>
      ) : (
        <p>Generating Info...</p>
      )}
    </main>
  );
}

export default MonsterGenerator;
