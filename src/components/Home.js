import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import NavBar from "./NavBar";

import '../styles/Home.css';


function Home(props) {
  return (
    <div className="home">
      <NavBar />
      <div className="game-links-all">
        <Link to="/game-1" className="game-link game-1">
          <img src={props.gameImg1} alt=""></img>
          <div className="overlay">
              <p className="overlay-text">Outer Space</p>
          </div>
        </Link>
        <Link to="/game-2" className="game-link game-2">
          <img src={props.gameImg2} alt=""></img>
          <div className="overlay">
              <p className="overlay-text">Ski Mountain</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;