import React, { useState } from 'react';


function Leaderboard(props) {
    //props.dataArr
    const testItems = props.dataArr;
    console.log(testItems);

    const scoreDivs = testItems.map((item) =>
        <li>test</li>
    );

    return (
        <div className="leaderboard-display">
            <ul>
                {scoreDivs}
            </ul>
        </div>

    );
  }
  
  export default Leaderboard;