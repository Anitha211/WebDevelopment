import React from "react"
import { Context } from "./A";
import { useContext } from "react";


function G(){
    let {n,Change} = useContext(Context)
    console.log("Changed Data:",n);
    
    return(
        <div>
            <h3>G</h3> 
            <p>Data from A1 Component - {n}</p>
            <button onClick={Change}>Change data</button>
        </div>
    )
}

export default G;