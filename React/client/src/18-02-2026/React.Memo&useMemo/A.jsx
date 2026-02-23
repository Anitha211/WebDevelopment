import React from "react"

let A = React.memo(({value})=>{

        console.log("A Component");

        return (
            <div>
             <h1> A component - {value} </h1>
             <h3></h3>
              
             </div>
        ) 
         
})
export default A;