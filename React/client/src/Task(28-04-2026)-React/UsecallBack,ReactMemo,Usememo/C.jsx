import React from "react";

let C = React.memo(({data}) => {
    console.log("C Component Render");

    return(
        <div>
            <h2>Data Changed: {data}</h2>
        </div>
    ) 
})

export default C;


