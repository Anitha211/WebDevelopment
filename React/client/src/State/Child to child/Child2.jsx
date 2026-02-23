import React from "react"

function Child2({B}){
    
    console.log(B);
    
    
    return(
        <div>
           <h2>Child2 Component</h2>
           <h2>value: {B}</h2>
        </div>
    )
}

export default Child2;