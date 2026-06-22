import React, { useEffect, useState } from "react";

function Timer() {

    let [time, setTime] = useState(
        new Date().toLocaleDateString()
    );

    useEffect(() => {

        let timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer)

    },[]);

    return(

        <div>
            <h2>Live Clock</h2>
            <h3>Timer: {time}</h3>
        </div>
    )
}

export default Timer;


