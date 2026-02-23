import React, { StrictMode, Suspense } from "react";
import B from "./B";
import C from "./C"


function A(){

    return(

        <StrictMode>

            <h2>Hello, React!</h2>
            <h2>Functional Component</h2>
            <p>StrictMode</p>
            <p>A Component loaded</p>
            <B/> 
            <C/> 

        </StrictMode>

    )
}

export default A;