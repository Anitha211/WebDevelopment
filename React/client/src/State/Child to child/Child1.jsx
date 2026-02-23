import React from "react"
import Child2 from "./Child2"

function Child1({B, Value }){

    return(
        <div>
            <h2>Child1 Component</h2>
            
            <button onClick={() => Value()}>Increase Value</button>

            <Child2 B={B}/>
        </div>
    )
}

export default Child1;