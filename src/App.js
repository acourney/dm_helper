import React from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";

import "./App.css";

import PartyInput from "./components/PartyInput/PartyInput";
import NPCGeneratorButtons from "./components/NPCGeneratorButtons/NPCGeneratorButtons";
import MonsterGenerator from "./components/MonsterGenerator/MonsterGenerator";
import Home from "./components/Home/Home";
import GenerateNPCByClass from "./components/GenerateNPCByClass/GenerateNPCByClass";
import GenerateNPCRandomly from "./components/GenerateNPCRandomly/GenerateNPCRandomly";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/input">Input</Link>
        <Link to="/monster-generator">Generate Monsters</Link>
        <Link to="/npc-options">Generate NPCs</Link>
      </nav>

      <header>
        <h1>
          <Link to="/">DM Helper</Link>
        </h1>
      </header>

      <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="/input" element={<PartyInput />} />
          <Route path="/monster-generator" element={<MonsterGenerator />} />
          <Route path="/npc-options" element={<NPCGeneratorButtons />} />
          <Route path="/class-list" element={<GenerateNPCByClass />} />
          <Route path="/npc-randomizer" element={<GenerateNPCRandomly />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
