import React from "react";

let B = React.memo(({count,updateCount,UseMemo}) => {

    console.log("B Component");

    return(

        <div>

            <h2>B Component</h2>

            <h3>Count: {count}</h3>
            <p>Count * 2 = {UseMemo}</p>

            <button onClick={updateCount}>Update Count</button>

        </div>
    )
})

export default B;