import React, { useState } from 'react';


function Leaderboard(props) {
    //props.dataArr
    const testItems = props.dataArr;
    console.log(testItems);

    let i = 0;
    const scoreDivs = testItems.map((item) =>
        <li>
            <p>{i++}</p>
            <p> {item.name}</p>
            <p> {item.score} seconds</p>
        </li>
    );

    console.log(scoreDivs);

    return (
        <ul className="leaderboard-display">
            {scoreDivs}
        </ul>

    );
  }
  
  export default Leaderboard;