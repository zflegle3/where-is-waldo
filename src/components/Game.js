/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
// import { doc, getDoc } from "firebase/firestore";
import { addDoc, collection, getDoc } from "firebase/firestore"; 
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";
import '../styles/Game.css';
import Clock from "./Clock"
import InForm from "./InForm"
import NavBarPlay from "./NavBarPlay";


function Game(props) {
  const [selectDiv, setSelectDiv] = useState({
    xSelect: 0,
    ySelect: 0,
    locStyle: {
      top: 0,
      left: 0,
    },
    selected: false,
  });
  const [waldoCoord, setWaldoCoord] = useState({
    locX: 0,
    locY: 0,
    status: false,
  });
  const [odlawCoord, setOdlawCoord] = useState({
    locX: 0,
    locY: 0,
    status: false,
  });
  const [whiteBCoord, setWhiteBCoord] = useState({
    locX: 0,
    locY: 0,
    status: false,
  });
  const [classWaldo, setClassWaldo] = useState("score-item");
  const [classWhiteB, setClassWhiteB] = useState("score-item");
  const [classOdlaw, setClassOdlaw] = useState("score-item");
  const [classPopup, setClassPopup] = useState("select-div");
  const [classEndGame, setClassEndGame] = useState("end-game");
  const [gameStatus, setGameStatus] = useState(true); //switch to false once all 3 found
  const [scoreStatus, setScoreStatus] = useState(false); //switch to false once all 3 found
  const [playerScore, setPlayerScore] = useState(0);




  const logClick = (e) => {
    let ratio = e.target.height/e.target.naturalHeight;
    //Coordinates for Database Comparison (relative to real image size)
    let xCoord = (e.pageX - e.target.offsetLeft)/ratio;
    let yCoord = (e.pageY - e.target.offsetTop-(window.innerHeight*0.10))/ratio;
    //Coordinates for Screen Display (relative to absolute pos in gameplaydiv )
    let xRel = e.pageX;
    let yRel = e.pageY-e.target.parentElement.offsetTop;
    if (selectDiv.xSelect===0 && selectDiv.ySelect===0) {
    //if no selected value already, place selection div and update values
      setSelectDiv({
        xSelect: xCoord,
        ySelect: yCoord,
        locStyle: {
          top: yRel,
          left: xRel,
        },
        selected: true,
      });
      setClassPopup("select-div visable");
    } else { //clear select values & hide div, MAYBE REMOVE? NOW RESETTING ON SELECTION 
      setSelectDiv({
          xSelect: 0,
          ySelect: 0,
          locStyle: {
            top: 0,
            left: 0,
          },
          selected: false,
      });
      setClassPopup("select-div");
    };
  };


  const logSelect = (e) => {
    let guessIn = e.target.id;
    let checkCorrect = checkGuess(selectDiv.xSelect, selectDiv.ySelect, guessIn);
    setClassPopup("select-div");
    setSelectDiv({
      xSelect: 0,
      ySelect: 0,
      locStyle: {
        top: 0,
        left: 0,
      },
      selected: false,
    });
    console.log(checkCorrect);
    if (checkCorrect) {
      setCorrectGuess(guessIn);
      //CHECK IF ALL FOUND TO END TIMER
      checkGameEnd();
    }
  };

  const checkGuess = (xGuess, yGuess, guessId) => {
    console.log(xGuess, yGuess, guessId);
    let correctX = 0;
    let correctY = 0;
    switch (guessId) {
      case "waldo":
        correctX = waldoCoord.locX;
        correctY = waldoCoord.locY;
        break;
      case "odlaw":
        correctX = odlawCoord.locX;
        correctY = odlawCoord.locY;
        break;
      case "whitebeard":
        correctX = whiteBCoord.locX;
        correctY = whiteBCoord.locY;
        break;
    };
    let validX = (correctX+75 >= xGuess && xGuess >=correctX-75);
    let validY = (correctY+75 >= yGuess && yGuess >=correctY-75);
    if (validX && validY) {
      return true;;
    } else {
      return false;
    }
  }

  const setCorrectGuess = (selection) => {
    let updatedState;
    switch (selection) {
      case "waldo":
        updatedState = waldoCoord;
        updatedState.status = true;
        setWaldoCoord(updatedState);
        setClassWaldo("score-item correct");
        break;
      case "odlaw":
        updatedState = odlawCoord;
        updatedState.status = true;
        setOdlawCoord(updatedState);
        setClassOdlaw("score-item correct");
        break;
      case "whitebeard":
        updatedState = whiteBCoord;
        updatedState.status = true;
        setWhiteBCoord(updatedState);
        setClassWhiteB("score-item correct");
        break;
    };
  }


  const checkGameEnd = () => {
    //check status of all 3 items to be found/
    if(waldoCoord.status && odlawCoord.status && whiteBCoord.status) {
      setGameStatus(false);
      setClassEndGame("end-game game-over");
    } else {
    }
  }

  const submitPlayerData = (e) => {
    e.preventDefault();
    let playerName = document.getElementById("player-name");
    if (playerName.value) {
      addScoreData(playerName.value);
    } 
  }


  async function pullWaldoData() {
    const docSnap = await getDoc(props.gameData);
    if (docSnap.exists()) {
      const dataAll = docSnap.data();
      setWaldoCoord({
          locX: dataAll.waldoX,
          locY: dataAll.waldoY,
          status: false,
      });
      setOdlawCoord({
        locX: dataAll.odlawX,
        locY: dataAll.odlawY,
        status: false,
      });
      setWhiteBCoord({
        locX: dataAll.whitebeardX,
        locY: dataAll.whitebeardY,
        status: false,
      });
    } else {
    }
  }

  async function addScoreData(playerName) {
    const newDoc = await addDoc(props.scoreData, {
      name: playerName,
      score: playerScore,
    });
    // console.log("New doc created and added to leaderboard,",newDoc);
    setScoreStatus(true);
  }


  useEffect(() => {
    //pull in location data from firebase on page load
    // console.log("Pulling data from Database");
    pullWaldoData();
  },[]);

  return (
    <div className="game-container">
      <NavBarPlay classWaldo={classWaldo} classWhiteB={classWhiteB} classOdlaw={classOdlaw} gameStatus={gameStatus} setPlayerScore={setPlayerScore}  />
      <div className="gameplay">

        <img src={props.gameImg} alt="" onClick={logClick}></img>

        <div className={classPopup} style={selectDiv.locStyle}>

          <div className="select-highlight"></div>

          <div className="select-options">
            <div className="select-waldo" id="waldo" onClick={logSelect}>Waldo</div>
            <div className="select-waldo" id="whitebeard" onClick={logSelect}>Whitebeard</div>
            <div className="select-Ols" id="odlaw" onClick={logSelect}>Odlaw</div>
          </div>
        </div>
        
        <div className={classEndGame}> 
          <InForm scoreStatus={scoreStatus} submitPlayerData={submitPlayerData} playerScore={playerScore}/>
        </div>

      </div>
    </div>
  );
  }
  
  export default Game;


    //props.classWaldo
    //props.classWhiteB
    //props.classOdlaw
    //props.setPlayerScore()
    //props.gameStatus
