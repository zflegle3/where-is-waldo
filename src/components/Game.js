import React, { useState, useEffect } from 'react';
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
  const [value, setValue] = useState("");


  const logClick = (e) => {
    console.log(e);
    let ratio = e.target.height/e.target.naturalHeight;
    //Coordinates for Database Comparison (relative to real image size)
    let xCoord = (e.pageX - e.target.offsetLeft)/ratio;
    let yCoord = (e.pageY - e.target.offsetTop)/ratio;
    //Coordinates for Screen Display (relative to absolute pos in gameplaydiv )
    let xRel = e.pageX;
    let yRel = e.pageY-e.target.parentElement.offsetTop;
    //might need to also sort by click type (if add player type selection)
    //will need to update to make selectDiv location change with screen size change

    //if no selected value already
      //place selection div and update values
    //else 
      //clear select values & hide div
    if (selectDiv.xSelect===0 && selectDiv.ySelect===0) {
      console.log("Add Selection");
      setSelectDiv({
        xSelect: xCoord,
        ySelect: yCoord,
        locStyle: {
          top: yRel,
          left: xRel,
        },
        selected: true,
      });
    } else {
      console.log("Remove Selection");
      setSelectDiv({
          xSelect: 0,
          ySelect: 0,
          locStyle: {
            top: 0,
            left: 0,
          },
          selected: false,
      });
    }
  }

  const logSelect = (e) => {
    console.log(e.target.id,`at ${selectDiv.xSelect},${selectDiv.ySelect}`);
  }


  useEffect(() => {
    console.log("Update coordinates of div");
  });


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
        </div>

      </div>
    );
  } else {
    return (
      <div className="game-container">
        <div className="gameplay">
          <img src={props.gameImg} alt="" onClick={logClick}></img>
        </div>
      </div>
    );

  }

  }
  
  export default Game;


  //{props.gameImg}