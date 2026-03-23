import React from "react";

let B = React.memo(({data}) => {
    console.log("B Component Render");

    return(
        <div>
            <h2>{data}</h2>
        </div>
    ) 
})

export default B;
