import React, { useState } from "react";

function Switch() {

    let[isOn, setIson] = useState("");

    return(

    <div>
        <h2>Toggle Switch</h2>

       <h3 style={{color: isOn ? "White" : "Black", background:isOn ? "Green" : "Red",
        textAlign:"center",padding:"20px"
       }} >{isOn ? <p>ON</p> : <p>OFF</p>}</h3> 

        <button onClick={() => setIson(!isOn)}
            style={{color: isOn ? "Green" : "Red"}}>
            {isOn ? "ON" : "OFF"}
        </button>
        
    </div>

    )
}

export default Switch;




