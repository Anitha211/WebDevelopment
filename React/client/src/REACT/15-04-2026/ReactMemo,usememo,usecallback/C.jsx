import React from "react";

let C = React.memo(({age}) => {
    console.log("C compoment");

    return (
        <div>
            <h2>C Component</h2>
            <h3>Age: {age}</h3>
        </div>
    )
})

export default C;