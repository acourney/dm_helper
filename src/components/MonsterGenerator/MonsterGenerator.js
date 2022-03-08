import React from "react";
import { DataContext } from "../../dataContext";
import { useState, useContext, useEffect } from "react";

function MonsterGenerator(props) {
  const { formState, setFormState } = useContext(DataContext);

  const [error, setError] = useState("");

  const [monsterData, setMonsterData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [randomMonster, setRandomMonster] = useState({});
  const [actions, setActions] = useState("");

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
      .catch((err) => {
        const message =
          "Oops. Something went wrong, please refresh and try again.";
        setError(message);
      });
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

  useEffect(() => {
    if (isLoading === false) {
      const actionArr = [];
      for (let i = 0; i < randomMonster.actions.length; i++) {
        actionArr.push(randomMonster.actions[i].name);
      }
      const actionString = actionArr.join(", ");
      setActions(actionString);
    }
  }, [randomMonster]);

  return (
    <main className="monster-generator">
      {error ? <p>{error}</p> : null}
      {isLoading === false ? (
        <div className={error ? "displayNPCInfoError" : "displayNPCInfo"}>
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
          {randomMonster.actions ? (
            <p>
              <span>Actions: </span>
              {actions}
            </p>
          ) : (
            <p>
              <span>Actions: </span>
              None
            </p>
          )}

          <button onClick={handleClick}>Generate New Monster</button>
        </div>
      ) : (
        <p>Generating Info...</p>
      )}
    </main>
  );
}

export default MonsterGenerator;
