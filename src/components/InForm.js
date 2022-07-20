import React, { useState, useEffect } from 'react';


function InForm(props) {

    const [time, setTime] = useState(0);
    //props.scoreStatus
    //props.playerScore
    //props.submitPlayerData()

    useEffect(() => {

    });

    //if data has not yet been submitted, create form to add date
    if (!props.scoreStatus) {
        return(
            <form className="leaderboard-in">
                <p>Congrats, you won in {props.playerScore} seconds.</p>
                <p>Enter your name below and click submit to add your score to the leaderboard.</p>
                <input type="text" id="player-name" placeholder="Name"></input>
                <button onClick={props.submitPlayerData}>Submit</button>
            </form>
        );
    //else display reset info to play again
    } else {
        return (
            <div className="leaderboard-in">
                <p>Your score has been submitted.</p>
                <p>Return to home to try another game.</p>
            </div>
          );
    }
}

export default InForm;