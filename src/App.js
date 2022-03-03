import React from "react";
import { Route, Link, Routes, Navigate } from "react-router-dom";

import "./App.css";

import PartyInput from "./components/PartyInput/PartyInput";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/input">Input</Link>
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
