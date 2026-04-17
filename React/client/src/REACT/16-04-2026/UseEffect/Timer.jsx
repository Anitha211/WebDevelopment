import React, { useEffect, useState } from "react";

function Timer() {

    let[time, setTime] = useState(0);

    let[isRunning, setIsRunning] = useState(false);


    useEffect(() => {
        let interval;

        if(isRunning){
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 1)
            },1000)
        }
        
        return () => clearInterval(interval)
        
    },[isRunning]);

    return(
        <div>

            <h1>Stopwatch</h1>
            <h2>{time} Sec</h2>

            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={() => setTime(0)}>Reset</button>

        </div>
    )
}

export default Timer;





