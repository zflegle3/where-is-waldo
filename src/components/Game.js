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
      border: "1px solid red",
      borderRadius: "15px",
      width: `${30}px`,
      height: `${30}px`,
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
    let xRel = e.pageX-(selectDiameter/2);
    let yRel = e.pageY-e.target.parentElement.offsetTop-(selectDiameter/2);
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
          border: "2px solid red",
          borderRadius: "none",
          width: `${selectDiameter}px`,
          height: `${selectDiameter}px`,
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
            border: "none",
            borderRadius: "none",
            width: `0px`,
            height: `0px`,
          },
          selected: false,
      });
    }
  }


  useEffect(() => {
    console.log("Update coordinates of div");
  });


  if (selectDiv.selected) {
    return (
      <div className="game-container">
        <div className="gameplay">
          <img src={props.gameImg} alt="" onClick={logClick}></img>
          <div className="select-div" style={selectDiv.locStyle}>Test</div>
          {/* <div className="select-div" >Test</div> */}
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