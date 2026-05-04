import React from "react";

function Child({msg,value}) {

    // console.log(msg,"Count :",value);
    
    return(
        <div>
            <h3>Child Component</h3>
            <h4>Count: {value}</h4>
            <p>**{msg}**</p>
        </div>
    )
}

export default Child;