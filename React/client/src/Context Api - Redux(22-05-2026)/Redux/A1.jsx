import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function A1() {

    let count2 = useSelector((state) => state.count2);

    let Dispatch = useDispatch();

    let [running, setRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (running) {

            timer = setInterval(() => {

                Dispatch({ type: "Increase" });

            }, 1000);
        }

        return () =>
            clearInterval(timer);

    }, [running, Dispatch]);

    return (

        <div style={{ textAlign: "center" }}>

            <h1>Counter Timer</h1>

            <h2>Timer: {count2}</h2>

            <button onClick={() => setRunning(true)}>Start</button>

            <button onClick={() => setRunning(false)} style={{ marginLeft: "10px" }}>
                Stop</button>

            <button onClick={() => { setRunning(false); Dispatch({ type: "RESET" }) }}
                style={{ marginLeft: "10px" }}>Reset</button>

        </div>
    )
}

export default A1;




