import React from "react";
import useCounter from "./useCounter";

function Counter() {

    let {count, increase, decrease} = useCounter(0);

    return(

        <div>

            <h2>Counter: {count}</h2>
            
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

        </div>
    )
}

export default Counter;


