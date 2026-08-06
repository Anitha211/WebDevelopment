import React, { useState } from "react";
import CounterContext from "./A";
import Count from "./Count"

function Countcontext() {

    let [count, setCount] = useState(0);

    let increase = () => {
        setCount(count + 5);

    };

    let decrease = () => {
        setCount(count - 1);
       
    };

    let reset = () => {
        setCount(0);
      
    };

    return (

        <CounterContext.Provider value={{count, increase, decrease, reset}}>

            <Count/>

        </CounterContext.Provider>
    )
}

export default Countcontext;