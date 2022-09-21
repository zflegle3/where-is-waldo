function Scores(props) {
    //props.dataArr
    const testItems = props.dataArr;
    console.log(testItems);

    let i = 1;
    const scoreDivs = testItems.map((item) =>
        <tr className="leaderboard-row">
            <th>{i++}</th>
            <th>{item.name}</th>
            <th>{item.score}</th>
        </tr>
    );

    console.log(scoreDivs);

    return (
        <div className="leaderboard-container">
            <table className="leaderboard-table">
                <thead className="leaderboard-header">
                <tr className="leaderboard-row-header">
                    <th>Rank</th>
                    <th>Player Name</th>
                    <th>Score (seconds)</th>
                </tr>
                </thead>
                {scoreDivs}
            </table>  
        </div>
    );
  }
  
  export default Scores;