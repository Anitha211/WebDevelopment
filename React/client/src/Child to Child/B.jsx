import React from "react"

function B(props){
    console.log(props);
    return(
        <div>
            <h2>Child1 Component</h2>
            <p>Data from parent A {props.value}</p>

        </div>
    )
}

export default B;