import React, { useCallback, useMemo, useState } from "react";
import B from "./B"

function A(){

     let[Count, setCount] = useState(0);

     let[data, setData] = useState("React");
     
     let updateCount = useCallback(()=>{
             setCount(Count + 1); 
         },[Count]);

     let result = useMemo( () => {
      console.log("Calculating....");
      return Count * 10;
      
     },[Count])
     
     return(
    
    <div>

       <h1>Count: {Count}</h1>
       <h2>Result : {result}</h2>

       <button onClick={() => updateCount(Count + 5)}>
         Increase</button>

       <button onClick={() => setData("React.Memo")}>
         Data Changed</button>

       <B data = {data}/>

    </div>

    )
};

export default A;