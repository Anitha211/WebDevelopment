import React from "react"

function Child({onIncrease}){
    console.log("Child");
    
    return(
        <div>
          <h1>Child Component</h1>
          <button onClick={onIncrease}>Child Count</button>
        </div>
    )
}

export default  Child;