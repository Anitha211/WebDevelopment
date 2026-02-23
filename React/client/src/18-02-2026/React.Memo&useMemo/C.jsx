import React, { useMemo, useState } from "react";
import B from "./B"
import A from "./A";

let C = React.memo(()=>{
    console.log("C Component");

    let[count,setCount] = useState(0);

    let[a,seta] = useState(100);

    let Cal = useMemo(()=>{
        return a*2
    },[a]) 


     return (
        <div>
      <h1> C component </h1>
       
       <button onClick={()=>setCount(count+1)}>Increase</button>
       <button onClick={()=>seta(a+1)}>Increase {a}</button>

       <B count={count}/>

       <A value={Cal}/>
       
       </div>
)

})

export default C;