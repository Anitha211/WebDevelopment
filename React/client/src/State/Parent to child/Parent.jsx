import React, { useState } from "react"


function Parent(props){
    console.log(props);
    let[b,setb] =useState(999);
    let increase = () => {
    setb(b+1);
} 
return(
    <div>
        <h3>Parent.jsx(Child Component)</h3>
        <button onClick={increase}>Increace Child Component Value:{b}</button>
        <p>Get Value: {props.value}</p>
    </div>
    )
}

export default Parent;