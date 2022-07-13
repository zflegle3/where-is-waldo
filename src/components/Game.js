import React, { useState } from 'react';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";
import '../styles/Game.css';


function Game(props) {

  const logClick = (e) => {
    let ratioX = e.target.height/e.target.naturalHeight;
    let ratioY = e.target.width/e.target.naturalWidth;
    let xCoord = (e.pageX - e.target.offsetLeft)/ratioX;
    let yCoord = (e.pageY - e.target.offsetTop)/ratioY;
    console.log(e);
    console.log("X:",xCoord,"Y:",yCoord,)


    
  }


    return (
      <div className="game-container">
        <div className="gameplay">
          <img src={props.gameImg} alt="" onClick={logClick}></img>
        </div>
      </div>
    );
  }
  
  export default Game;


  //{props.gameImg}