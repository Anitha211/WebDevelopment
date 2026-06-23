import React from "react";

let B = React.memo(({count,setCount}) => {

    console.log("B Component");

    return(

        <div>

            <h2>B Component</h2>

            <h3>Count: {count}</h3>
            
            <button onClick={() => setCount(count + 5)}> Click + 5</button>
            <button onClick={() => setCount(count -5)}>Click - 5</button>

        </div>
    )
})

export default B;


