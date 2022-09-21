import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import { ReactComponent as LogoSvg } from '../images/logo.svg';
import { ReactComponent as CheckSvg } from '../images/check.svg';
import { ReactComponent as CircleSvg } from '../images/circle.svg';
import waldoImg from '../images/waldo.png';
import odlawImg from '../images/odlaw.jpg';
import whiteBImg from '../images/whitebeard.jpg';
import Clock from "./Clock";


function NavBarPlay(props) {
    //props.classWaldo
    //props.classWhiteB
    //props.classWhiteB
    //props.classOdlaw
    //props.setPlayerScore()
    //props.cgameStatus

    console.log(props.classWaldo);
    return (
        <div className="header">
          <Link to="/" className="header-logo-all">
                <LogoSvg />
          </Link>
          <div className="score-div">

                <div id="score-item" className={props.classWaldo}>
                    <img src={waldoImg} alt="waldo icon"></img>
                    <div className="score-status">
                        <div className="svg-container">
                            <CheckSvg />
                            {/* <CircleSvg /> */}
                        </div>
                        <p id="waldo-score" >Waldo</p>
                    </div>
                </div>

                <div id="score-item" className={props.classOdlaw}>
                    <img src={odlawImg} alt="odlaw icon"></img>
                    <div className="score-status">
                        <div className="svg-container">
                            <CheckSvg />
                            {/* <CircleSvg /> */}
                        </div>
                        <p id="odlaw-score" >Odlaw</p>
                    </div>
                </div>

                <div id="score-item" className={props.classWhiteB}>
                    <img src={whiteBImg} alt="odlaw icon"></img>
                    <div className="score-status">
                        <div className="svg-container">
                            <CheckSvg />
                            {/* <CircleSvg /> */}
                        </div>
                        <p id="whitebeard-score" >Whitebeard</p>
                    </div>
                </div>
                <div className="score-value">
                    <p>Score:</p>
                    <Clock clockStatus={props.gameStatus} setPlayerScore={props.setPlayerScore}/>
                </div>

            </div>
          <Link className="leaderboard-link" to="/leaderboard">Leaderboard</Link>

        </div>
      );
}

export default NavBarPlay;