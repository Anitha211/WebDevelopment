import React, { useState } from "react";

function Counter() {

    let [count, setCount] = useState(0);

    return (

        <div>

            <h1>Counter</h1>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}> Click </button>

        </div>
    )
}

export default Counter;


