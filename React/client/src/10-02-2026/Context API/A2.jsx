import { Context1 } from "./A";
import { useContext } from "react";

function A2(){
    let {n,Change, count, inc, dec, reset} = useContext(Context1)
    console.log("Changed Data:",n);
    console.log("Count:",count);
    
    
    
    return(
        <div>
            <p>Data from A1 Component - {n}</p>
            <button onClick={Change}>Change data</button>
            
             
            <h1>COUNT: {count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <button onClick={reset}>Reset</button>
          

        </div>
    )
}

export default A2;