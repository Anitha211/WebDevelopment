import React, { useState } from "react"
import Child from "./Child"

function Parent1(){
    let [a,seta] = useState();

    function getVal(a){
        seta(a);
    }

    return(

        <div>
        <h3>Parent Component</h3>
        <p>Data from Child:{a}</p>
        <Child senddata={getVal}/>
        </div>
    )
}

export default Parent1;
