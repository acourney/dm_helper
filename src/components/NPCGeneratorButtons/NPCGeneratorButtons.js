import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function NPCGeneratorButtons(props) {
  return (
    <main className="generator-buttons">
      Choose a class for your NPC or generate a completely random npc with the
      buttons below:
      <div className="button-container">
        <Link to="/class-list">
          <p>Choose NPC Class</p>
        </Link>
        <Link to="/npc-randomizer">
          <p>Generate Completely Random NPC</p>
        </Link>
      </div>
    </main>
  );
}

export default NPCGeneratorButtons;
