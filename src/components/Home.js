import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import '../styles/Home.css';


function Home(props) {
  return (
    <div className="home">
      <div className="game-links-all">
        <Link to="/game-1" className="game-link game-1">
          <img src={props.gameImg1} alt=""></img>
          <div className="overlay">
              <div className="overlay-text">Space Waldo</div>
          </div>
        </Link>
        <Link to="/game-2" className="game-link game-2">
          <img src={props.gameImg2} alt=""></img>
          <div className="overlay">
              <div className="overlay-text">Ski Waldo</div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;