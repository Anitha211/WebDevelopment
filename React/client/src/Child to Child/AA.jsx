import React from 'react';
import B from "./B";
import C from './C';



function AA(){

    let c = 15;

    function getValue(k){
     
        console.log(k)
    }
    getValue()

    return(
        <div>
            <h2>Parent Component</h2>
            <B value={c}/>
            <C a={getValue}/>
        </div>
    )
}

export default AA;
