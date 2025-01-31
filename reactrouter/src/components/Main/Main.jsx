import React from 'react'
import { Routes, Route} from "react-router-dom";
import Blue from '../Blue/Blue';
import Red from "../Red/Red";
import Home from "../Home/Home";

function Main() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
      </Routes>
    </div>
  );
}

export default Main;
