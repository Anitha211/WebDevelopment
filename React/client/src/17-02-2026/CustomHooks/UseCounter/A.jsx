import React from "react"
import useCounter from "./useCounter";

function A(){
    let {count,inc,dec} = useCounter()
    console.log(count);
    
    return(
        <div> useCounter
            <h2>Counter Component A</h2>
            <h3>count: {count}</h3>

            <button onClick={inc}>Increase</button>
            <button onClick={dec}>Decrease</button>
            
        </div>
    )
}

export default A;