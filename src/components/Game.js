/* eslint-disable default-case */
import React, { useState, useEffect } from 'react';
// import { doc, getDoc } from "firebase/firestore";
import { collection, getDoc } from "firebase/firestore"; 
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link
// } from "react-router-dom";
import '../styles/Game.css';


function Game(props) {
  const [selectDiameter, setSelectDiameter] = useState(50); //update to make responsive to page size
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




  const logClick = (e) => {
    console.log(e.pageX,e.target.offsetLeft);
    console.log(e.pageY,e.target.offsetTop);
    console.log(e.target.naturalHeight);
    console.log(e);
    let ratio = e.target.height/e.target.naturalHeight;
    console.log(ratio);
    //Coordinates for Database Comparison (relative to real image size)
    let xCoord = (e.pageX - e.target.offsetLeft)/ratio;
    let yCoord = (e.pageY - e.target.offsetTop-(window.innerHeight*0.05))/ratio;
    console.log(xCoord, yCoord);
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
    } else { //clear select values & hide div
      setSelectDiv({
          xSelect: 0,
          ySelect: 0,
          locStyle: {
            top: 0,
            left: 0,
          },
          selected: false,
      });
    };
  };


  const logSelect = (e) => {
    console.log(e.target.id,`at ${selectDiv.xSelect},${selectDiv.ySelect}`);
    let guessIn = e.target.id;
    let checkCorrect = checkGuess(selectDiv.xSelect, selectDiv.ySelect,guessIn);
    if (checkCorrect) {
      setCorrectGuess(e.target.id);
      //CHECK IF ALL FOUND TO END TIMER
    }
  };

  const checkGuess = (xGuess, yGuess, guessId) => {
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
    console.log("X)",validX,"min:",correctX-75,"guess:",xGuess,"max:",correctX+75);
    console.log("Y)",validY,"min:",correctY-75,"guess:",yGuess,"max:",correctY+75);
    if (validX && validY) {
      console.log("Correct")
      return true;;
    } else {
      console.log("Incorrect");
      return false;
    }
  }

  const setCorrectGuess = (selection) => {
    //toggle div to correct
    //update value to correct
    let updatedState;
    switch (selection) {
      case "waldo":
        updatedState = waldoCoord;
        updatedState.status = true;
        setWaldoCoord(updatedState);
        setClassWaldo("score-item correct")
        break;
      case "odlaw":
        updatedState = odlawCoord;
        updatedState.status = true;
        setOdlawCoord(updatedState);
        setClassOdlaw("score-item correct")
        break;
      case "whitebeard":
        updatedState = whiteBCoord;
        updatedState.status = true;
        setWhiteBCoord(updatedState);
        setClassWhiteB("score-item correct")
        break;
    };
  }





  async function pullWaldoData() {
    const docSnap = await getDoc(props.gameData);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
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
      console.log("No such document!");
    }
  }


  useEffect(() => {
    //pull in location data from firebase on page load
    console.log("Pulling data from Database");
    pullWaldoData();
  },[]);


  if (selectDiv.selected) {
    return (
      <div className="game-container">
        <div className="gameplay">
          <img src={props.gameImg} alt="" onClick={logClick}></img>
          <div className="select-div" style={selectDiv.locStyle}>
            <div className="select-highlight"></div>
            <div className="select-options">
              <div className="select-waldo" id="waldo" onClick={logSelect}>Waldo</div>
              <div className="select-waldo" id="whitebeard" onClick={logSelect}>Whitebeard</div>
              <div className="select-Ols" id="odlaw" onClick={logSelect}>Odlaw</div>
            </div>
          </div>
          <div className="score-div">
            <div className="score-display">
              <p id="waldo-score" className={classWaldo}>Waldo</p>
              <p id="whitebeard-score" className={classWhiteB}>Whitebeard</p>
              <p id="odlaw-score" className={classOdlaw}>Odlaw</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="game-container">
        <div className="gameplay">
          <img src={props.gameImg} alt="" onClick={logClick}></img>
          <div className="score-div">
            <div className="score-display">
              <p id="waldo-score" className={classWaldo}>Waldo</p>
              <p id="whitebeard-score" className={classWhiteB}>Whitebeard</p>
              <p id="odlaw-score" className={classOdlaw}>Odlaw</p>
            </div>
          </div>
        </div>
      </div>
    );

  }

  }
  
  export default Game;


  //{props.gameImg}