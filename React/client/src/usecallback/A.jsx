import React, { useCallback, useState } from "react";

function A() {

    let [count, setCount] = useState(0);

    let increase = useCallback (() => {

        setCount(count+2);

    },[count]);

    return(

        <div>

            <h1>Count: {count}</h1>
            <button onClick={increase}>Increase</button>

        </div>
    )
}

export default A; 

