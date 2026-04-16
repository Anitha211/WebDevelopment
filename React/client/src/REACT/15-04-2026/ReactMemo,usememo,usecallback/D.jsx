import React from "react";

let D = React.memo(({data}) => {
    console.log("D Component Render");

    return(
        <div>
            <h2>D Component</h2>
            <h3>{data}</h3>
        </div>
    ) 
})

export default D;