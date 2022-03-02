import React from "react";
import { Link, Navigation, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <header>
        <Header />
      </header>

      <main></main>
    </div>
  );
}

export default App;
