import React from "react";

function B(props) {

    console.log(props);
    
    return(

        <div>
            <p>Child Componet (B)- from parent componet the data is passed by using props</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>

            <h3>Count: {props.count}</h3>
            <button onClick={props.inc}>Increase</button>

        </div>
    )
}

export default B;