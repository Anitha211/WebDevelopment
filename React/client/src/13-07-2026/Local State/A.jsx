import React from "react";
import { useState } from "react";

function A() {

    let [count, setCount] = useState(0);

    return(

        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase</button>

        </div>
    )
};

export default  A;


