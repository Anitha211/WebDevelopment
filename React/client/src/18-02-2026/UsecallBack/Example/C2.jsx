import React from "react";

let C2 = React.memo(({count,updateCount,UseMemo}) => {
    console.log("Child 2 compoment is running...!");
    return (
        <div className="card">
            <h2>Child 2 Component</h2>
            <h3>Count: {count}</h3>
            <h4>Count * 10 =  {UseMemo}</h4>

            <button className="btn" onClick={updateCount}>Update Count</button>
           
        </div>
    )

    
})

export default C2;