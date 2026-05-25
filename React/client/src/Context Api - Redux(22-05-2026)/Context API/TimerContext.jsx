import React, { useEffect, useState } from "react";
import Context1 from "./CreateContext";
import Timer from "./Timer";

function TimerContext() {

    let [hours, sethours] = useState(0);

    let [minutes, setMinutes] = useState(0);

    let [seconds, setSecond] = useState(0);

    let [running, setRunning] = useState(false);

    useEffect(() => {

        if (!running) return;
        let timer = setInterval(() => {
            setSecond((prevSeconds) => {
                if (prevSeconds === 59) {
                    setMinutes((prevMinutes) => {
                        if (prevMinutes === 59) {
                            sethours((prevHours) => prevHours + 1);
                            return 0;
                        }

                        return prevMinutes + 1;
                    });
                    return 0;
                }
                return prevSeconds + 1
            });
        }, 1000);

        return () => clearInterval(timer);

    }, [running]);

    // start timer

    let startTimer = () => {
        setRunning(true)
    };

    // Stop timer

    let stopTimer = () => {
        setRunning(false)
    };

    // reset timer

    let resetTimer = () => {
        setRunning(false);
        sethours(0);
        setMinutes(0);
        setSecond(0);
    };

    return (

        <Context1.Provider value={{
            hours, minutes, seconds,
            startTimer, stopTimer,
            resetTimer
        }}>

            <Timer />

        </Context1.Provider>
    )
}

export default TimerContext;




