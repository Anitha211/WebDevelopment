import React, { useEffect, useState } from "react";

function A(){
    let [a,seta] = useState(0);

    useEffect(() => {
        console.log("Count Changed:", a);
    },[a]);

    return(

        <div>
            <h2>Count:{a}</h2>
            <button onClick={()=>seta(a+1)}>Increase +</button>
        </div>
    )
}

export default A;