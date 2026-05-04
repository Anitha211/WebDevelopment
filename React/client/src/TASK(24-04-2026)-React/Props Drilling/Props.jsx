import React from "react";
import Child1 from "./Child1";

function Props(){

    let course = "React Js";
    
    return(
        <div>
            <h2>Parent Component</h2>

            <Child1 course={course}/>

        </div>
    )
}

export default Props;