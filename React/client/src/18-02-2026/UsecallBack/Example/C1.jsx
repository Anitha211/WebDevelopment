import React from "react";

let C2 = React.memo(({age,updateAge}) => {
    console.log("Child 1 compoment is running...!");

    return (
        <div className="card">
            <h2>Child 1 Component</h2>
            <h3>Age: {age}</h3>
            <button className="btn" onClick={updateAge}>Update Age</button>
        </div>
    )
    
})

export default C2;