import React from "react";

let B = React.memo(({click}) => {
    console.log("B Component");
    
    return(
        <div>
            <button onClick={click}>Click B</button>
        </div>
    )
})

export default B;