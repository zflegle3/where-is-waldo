import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { query, collection, orderBy, limit, getDocs, docs, data} from "firebase/firestore"; 
import '../styles/Leaderboard.css';
import Scores from "./Scores";


function Leaderboard(props) {
  const [lbOneData, setLbOneData] = useState([]);
  const [lbTwoData, setLbTwoData] = useState([]);
  const [displayData, setDisplayData] = useState(lbOneData);
  //props.lb1
  //props.lb2
  

  async function pullLeaderboardData() {
    console.log("pull data");
    const l1Col = query(
      // collection(props.dbRef, "game-one-leaderboard"),
      props.lb1,
      orderBy("score"),
      limit(15),
    );

    let tempDataGameOne = [];
    const l1Snap = await getDocs(l1Col); //returns a query snapshot, an array of documents
    const l1DocsAll = l1Snap.forEach((querySnap) =>  {
      tempDataGameOne.push(querySnap.data());
      console.log(tempDataGameOne);
    });

    setLbOneData(tempDataGameOne);
  }
  
  useEffect(() => {
    //pull in location data from firebase on page load
    console.log(props.dbRef)
    pullLeaderboardData();
  },[]);

    return (
      <div className="leaderboard">
        <div className="leaderboard-nav">
          <button>Game One</button>
          <button>Game Two</button>
        </div>
        <Scores dataArr={displayData} />
      </div>

    );
  }
  
  export default Leaderboard;