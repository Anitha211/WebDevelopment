import React from "react";

let C3 = React.memo(()=>{
    console.log("Child 3 compoment is running...!")
    
    return(
        <div className="card">
          <h2>Child 3 Component</h2>
          <h3>This component do not receive props</h3>
        </div>
    )
})

export default C3;

