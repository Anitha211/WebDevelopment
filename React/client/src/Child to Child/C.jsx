import React from "react"


function C(c){
    console.log(c);

    let k= 1000;
    c.a(k)
    return(
        <div>
             <h2>Child2 Component</h2>
        </div>
    )
}

export default C;