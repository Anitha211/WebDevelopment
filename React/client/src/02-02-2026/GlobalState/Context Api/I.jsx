import React, { useContext } from "react"
import { Context } from "./A";
 
function I(){
    
    let {a,seta}= useContext(Context);
    console.log("Increase:",a)
    
return(
        <div>
            <h3>I</h3>
            <p>Value from A1 Component - {a}</p> 
            <button onClick={() => {seta(a+2)}}>Increase</button>
        </div>
    )
}

export default I;

