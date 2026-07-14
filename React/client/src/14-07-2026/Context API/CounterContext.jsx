import React, { useState } from "react";
import Counter from "./Counter";
import A from "./createContext";

function CounterContext() {

    let [count, setCount] = useState(0);

    return(

        <A.Provider value={{count, setCount}}>

            <Counter/>

        </A.Provider>

    )
}

export default CounterContext;


