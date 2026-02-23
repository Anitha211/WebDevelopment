import React from "react"

function Child(props){
    console.log(props);

    function sendValue(){
        props.senddata(500000000000);
    }
    return(
        <div>
         <h3>Child Component</h3>
         <button onClick={sendValue}>Send data to Parent</button>
        </div>
    )
}


export default Child;