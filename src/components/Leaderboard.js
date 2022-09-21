import React, { useState, useEffect } from 'react';
import { query, orderBy, limit, getDocs } from "firebase/firestore"; 
import '../styles/Leaderboard.css';
import Scores from "./Scores";
import NavBar from "./NavBar";


function Leaderboard(props) {
  const [lbOneData, setLbOneData] = useState([]);
  const [lbTwoData, setLbTwoData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  //props.lb1
  //props.lb2


  const selectLeaderboard = (e) => {
    e.preventDefault()
    switch (e.target.id) {
      case "game-one":
        setDisplayData(lbOneData)
        break;
      case "game-two":
        setDisplayData(lbTwoData)
        break;
    }
  }
  

  async function pullLeaderboardData() {
    //Queries by dataset
    const l1Col = query(
      props.lb1,
      orderBy("score"),
      limit(15),
    );
    const l2Col = query(
      props.lb2,
      orderBy("score"),
      limit(15),
    );

    //Temp Vars by dataset
    let tempDataGameOne = [];
    let tempDataGameTwo = [];

    //Snapshots & Data by dataset
    const l1Snap = await getDocs(l1Col); //returns a query snapshot, an array of documents
    const l1DocsAll = l1Snap.forEach((querySnap) =>  {
      tempDataGameOne.push(querySnap.data());
    });
    const l2Snap = await getDocs(l2Col);
    const l2DocsAll = l2Snap.forEach((querySnap) =>  {
      tempDataGameTwo.push(querySnap.data());
    });

    //Set data array states by dataset
    setLbOneData(tempDataGameOne);
    setLbTwoData(tempDataGameTwo);
  }
  
  useEffect(() => {
    //pull in location data from firebase on page load
    pullLeaderboardData();
  },[]);

    return (
      <div className="leaderboard">
        <NavBar />
        <div className="leaderboard-nav">
          <button id="game-one" onClick={selectLeaderboard}>Outer Space</button>
          <button id="game-two" onClick={selectLeaderboard}>Ski Mountain</button>
        </div>

        <Scores dataArr={displayData} />   
      </div>

    );
  }
  
  export default Leaderboard;