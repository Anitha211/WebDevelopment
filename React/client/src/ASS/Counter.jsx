import React from "react";
import { useState } from "react";

function Counter(){

    let [count, setCount] = useState(0);

    let inc = () => {
        setCount(count + 1)
    }

    let dec = () => {
        setCount(count - 1)
    }

    return(
        <div>
            <h1>Counter</h1>
             <h3>Count: {count}</h3>
             <button onClick={inc}>Increment</button>
             <button onClick={dec}> Decrement</button>
        </div>
    )
}

export default Counter;