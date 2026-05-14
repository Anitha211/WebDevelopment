import React, { useCallback, useState } from "react";
import B from "./B"

function A() {

    let [count, setCount] = useState(0);

    console.log("A Component");

    let handleClick = useCallback(() => {
        console.log("Button Clicked");
    }, []);

    return (

        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <br/><br/>
            <B click={handleClick} />
        </div>
    )
}

export default A;

