import React from "react";

function Child1({sendData}) {

    let sedMsg = () => {
        sendData("Hello Parent, msg from child1")
    };

    
    return(
        <div>
            <h3>Child1 Component</h3>
            <button onClick={sedMsg}>Send Msg to Parent</button>
        </div>

        
    )
}

export default Child1;