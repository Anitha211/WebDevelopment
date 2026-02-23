
import { Component } from 'react';
function B(props){
    console.log(props)
    return(
        <div>
            <h1>Child Component (B)</h1>
            <p>All this data is from parent Component A</p>
            <p>{props.a}</p>
            <p>Data from A component:{props.b}</p>
            
        </div>
    )
}

export default B;