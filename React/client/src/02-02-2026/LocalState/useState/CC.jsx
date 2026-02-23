import React, { useContext } from "react"
import { Context } from "../../GlobalState/Context Api/A";


function CC(){
    let {c,setc} = useContext(Context);
    console.log("Decrease:",c);
    
    return(
        <div>
           <h1>UseState</h1>
          <h3>Value is from Context API/A1 Component - {c}</h3>
          <button onClick={() => {setc(c-5)}}>Decrease</button>
        </div>
    )
}
export default CC;