import React from "react";
import Child3 from "./Child3";

function Child2({course}){
    
    return(
        <div>
            <h2>Child2 Component</h2>
            <Child3 course={course}/>
        </div>
    )
}

export default  Child2;