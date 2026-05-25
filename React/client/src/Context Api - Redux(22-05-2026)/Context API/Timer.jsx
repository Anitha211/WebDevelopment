import React, { useContext } from "react";
import Context1 from "./CreateContext";


function Timer() {

    let { hours, minutes, seconds, startTimer, stopTimer, resetTimer} = useContext(Context1);

        // function format(value) {
        //     return value < 10 ? `0${value}` : `${value}`
        // };

    return(

        <div style={{textAlign:"center"}}>

            <h2>Timer</h2>

            <h2>{hours} : {minutes} : {seconds}</h2>

            <button onClick={startTimer}>START</button>

            <button onClick={stopTimer} style={{marginLeft:"10px"}}>STOP</button>

            <button onClick={resetTimer} style={{marginLeft:"10px"}}>RESET</button>

        </div>
    )
}

export default Timer;




