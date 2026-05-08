import React from "react";

let B = React.memo(({count, Increase}) => {

      console.log("B Component");

    return (

        <div>
            <h1>COUNT: {count}</h1>
            <button onClick={Increase}>Increase Count</button>
        </div>
    )
})

export default B;