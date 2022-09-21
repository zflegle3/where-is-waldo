import React, { useState } from 'react';


function InForm(props) {

    const [time, setTime] = useState(0);
    //props.scoreStatus
    //props.playerScore
    //props.submitPlayerData()


    const handleSubmit = (e) =>  {
        e.preventDefault();

        let playerName = document.getElementById("player-name");
        let errorEl = document.getElementById("error-text");
        errorEl.classList = "";
        errorEl.innerHTML = "";

        if (playerName.value.length < 1) {
            errorEl.classList = "error-active";
            errorEl.innerHTML = "Player name must not be empty to submit a score";
        } else if (playerName.value.length > 20) {
            errorEl.classList = "error-active";
            errorEl.innerHTML = "Player name must not be longer than 20 characters";
        } else {
            props.submitPlayerData(e);
        };
    }


    if (!props.scoreStatus) {
        return(
            <form className="leaderboard-in">
                <p>Congrats! You won in {props.playerScore} seconds.</p>
                <p>Enter your name below and click submit to add your score to the leaderboard.</p>
                <div>
                    <input type="text" id="player-name" placeholder="Name"></input>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <p id="error-text"></p>

            </form>
        );
    //else display reset instructions to play again
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