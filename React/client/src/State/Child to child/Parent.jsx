import React, { useState } from "react"
import Child1 from "./Child1"


function Parent(){
    
let[B,setB] = useState(0);

let increase = ()=> {
    setB(B+1)
}
return(
    <div>
        <h2>Parent Component</h2>
        <Child1 B={B}
                Value={increase}
        />
    </div>
    )
}

export default Parent;

