import React, { useMemo, useState } from "react";

function Memo() {

    let [number, setNumber] = useState(1);

    let [count, setCount] = useState(0);

    let factorial = useMemo(() => {

        console.log("Calculating");
        
        let result = 1;

        for(let i = 1; i <= number; i++) {
            result *= i;
        };

        return result;
        
    },[number]);

    return(

        <div>

            <h1>Factorial: {factorial}</h1>

            <button onClick={() => setNumber(number + 1)}> Increase Number</button>

            <button onClick={() => setCount(count + 1)}>Count {count}</button>

        </div>
    )
};

export default Memo;




