import React from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { DataContext } from "./dataContext";

import "./App.css";

import PartyInput from "./components/PartyInput/PartyInput";
import NPCGeneratorButtons from "./components/NPCGeneratorButtons/NPCGeneratorButtons";
import MonsterGenerator from "./components/MonsterGenerator/MonsterGenerator";
import Home from "./components/Home/Home";
import GenerateNPCByClass from "./components/GenerateNPCByClass/GenerateNPCByClass";
import GenerateNPCRandomly from "./components/GenerateNPCRandomly/GenerateNPCRandomly";
import SpecificClassNPC from "./components/GenerateNPCByClass/SpecificClassNPC";

function App() {
  const initialState = {
    partySize: "",
    partyLevel: "",
  };

  const [formState, setFormState] = useState(initialState);

  function toggleNav(event) {
    console.log("you clicked the menu bar");
  }

  return (
    <div className="App">
      <header>
        <span className="header-menu">
          <Link to="/">
            <img
              id="dm-helper-logo"
              src="https://imgur.com/1jnJ7cZ.png"
              alt="DM Helper Logo"
            />
          </Link>

          <p id="menu" onClick={toggleNav}>
            &#9776;
          </p>
        </span>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/input">Input</Link>
        <Link to="/monster-generator">Generate Monsters</Link>
        <Link to="/npc-options">Generate NPCs</Link>
      </nav>

      <div className="routes">
        <DataContext.Provider value={{ formState, setFormState }}>
          <Routes>
            <Route path="/input" element={<PartyInput />} />
            <Route path="/monster-generator" element={<MonsterGenerator />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />

            <Route path="/npc-options" element={<NPCGeneratorButtons />} />
            <Route path="/class-list" element={<GenerateNPCByClass />} />
            <Route path="/npc-randomizer" element={<GenerateNPCRandomly />} />
            <Route
              path={`/generate-:npcClass`}
              element={<SpecificClassNPC />}
            />
          </Routes>
        </DataContext.Provider>
      </div>
    </div>
  );
}

export default App;
