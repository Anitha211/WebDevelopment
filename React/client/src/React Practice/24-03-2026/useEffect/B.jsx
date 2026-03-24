import React, { useEffect, useState } from "react";

function B(){
    let[show, setShow] = useState(true);

    useEffect(()=>{
      console.log("Visibility Changed:", show);
    },[show]);

    return(
        <div>
          <h2>{show}</h2>
          <button onClick={() => setShow(!show)}>Show</button>
          {show&& <h2>Hello</h2>}
        </div>
    )
}

export default B;