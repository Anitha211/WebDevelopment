import React, { useContext } from "react";
import CounterContext from "./A";

function Count() {

    let {count, increase, decrease, reset} = useContext(CounterContext);

    return(

        <div>

            <h2>Count: {count}</h2>

            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
            <button onClick={reset}> Reset </button>

        </div>
    )
}

export default Count;