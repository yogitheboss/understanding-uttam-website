import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Introductory from "./components/Introductory";
function App() {
  return (
    <>
      <Navbar />
      <Introductory/>
    </>
  );
}

export default App;
