import React from "react";

let B = React.memo(({count})=>{
    console.log("B Component");

     return (
        <div>
     <h1> B component </h1>
     <h3> count: {count}</h3>
     </div>
     )
})

export default B;