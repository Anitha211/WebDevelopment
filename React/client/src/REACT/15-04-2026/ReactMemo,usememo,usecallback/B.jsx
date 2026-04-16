import React from "react";

let B = React.memo(({count, value}) => {
    console.log("B Component");

    return (
    <div>
        <h2> B component </h2>
        <h3> count: {count}</h3>
        <h3>Usememo: {value}</h3>
    </div>

    )
})

export default B;



