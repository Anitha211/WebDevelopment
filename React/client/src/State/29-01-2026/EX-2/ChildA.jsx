import React from "react"
import ChildB from "./ChildB"

function ChildA({value,setValue}){
    return(
        <div>
            <h2>ChildA</h2>
            <button onClick={() => setValue("Hello from ChildA")}>Send Data</button>
            <ChildB value={value}/>

        </div>
    )
}

export default ChildA;