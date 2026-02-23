import React from "react"
function ChildB({value}){
    console.log(value);
    
    return(
        <div>
          <h2>ChildB:{value}</h2>
        </div>
    )
}

export default ChildB;