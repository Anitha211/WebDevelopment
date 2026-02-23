import React, { Suspense } from "react";

function C(){
    let a = 10;
    let _A = 5;
    
    console.log(a);
    console.log(_A);
    
    return(

       <div>
        
        <p>C Component loaded</p>
        <h1>Value of a - {a}</h1>
        <p>{_A}</p>
        <p>{a + _A}</p>

        
        </div>
    )
}

export default C;