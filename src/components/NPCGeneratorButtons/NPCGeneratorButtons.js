import React from "react";

function NPCGeneratorButtons(props) {
  return (
    <main className="generator-buttons">
      Choose a class for your NPC or generate a completely random npc with the
      buttons below:
      <div className="button-container">
        <button>Go to Class List</button>
        <button>Completely Randomize my NPC</button>
      </div>
    </main>
  );
}

export default NPCGeneratorButtons;
