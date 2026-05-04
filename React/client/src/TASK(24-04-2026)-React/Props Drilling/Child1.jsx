import React from "react";
import Child2 from "./Child2";

function Child1({course}){
    
    return(
        <div>
            <h2>Child1 Component</h2>
            <Child2 course={course}/>

        </div>
    )
}

export default Child1;