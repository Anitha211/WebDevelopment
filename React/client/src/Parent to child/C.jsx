
import {Component} from 'react';

function C(p){
    let k = 4000;
    console.log(p.b);
    p.b(675);
    
    return(
        <div>
            <h1>Child Component (C)</h1>
            <p>Data from A component: {p.b} </p>
        </div>
    )
}

export default C;