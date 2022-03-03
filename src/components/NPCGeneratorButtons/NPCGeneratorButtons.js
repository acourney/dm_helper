import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function NPCGeneratorButtons(props) {
  return (
    <main className="generator-buttons">
      Choose a class for your NPC or generate a completely random npc with the
      buttons below:
      <div className="button-container">
        <Link to="/class-list">
          <button>Go to Class List</button>
        </Link>
        <Link to="/npc-randomizer">
          <button>Completely Randomize my NPC</button>
        </Link>
      </div>
    </main>
  );
}

export default NPCGeneratorButtons;
