import React from "react"
import useCounter from "./useCounter";

function B(){
    let {count,inc,dec} = useCounter(100)
    // console.log(count);
    
    return(
        <div>
            <h2>Counter Component B</h2>
            <h3>count: {count}</h3>

            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            


        </div>
    )
}

export default B;