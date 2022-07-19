import React, { useState, useEffect } from 'react';


function Home(props) {
    const [time, setTime] = useState(0);
    //props.clockStatus

    useEffect(() => {
        if (props.clockStatus) {
            setTimeout(() => { setTime(time + 1);}, 1000)
        }
    });

  return (
    <p className="score-timer">{time}</p>
  );
}

export default Home;