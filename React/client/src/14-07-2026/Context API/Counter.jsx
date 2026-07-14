import React, { useContext } from "react";
import A from "./createContext";

function Counter() {

    let {count, setCount} = useContext(A);

    return(

        <div>

            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
    )
}

export default Counter;

