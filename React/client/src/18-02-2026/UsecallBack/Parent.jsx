// usecallBack --> 

import React, {  useState , useCallback} from "react";
import Child from "./Child";

function Parent(){
    
    
    let[count,setCount] = useState(0);
    console.log("parent",count);

   
    let handleIncrease = useCallback(()=>{
        setCount(count+5)
    },[count]);

    return(
        <div>
            <h1>Parent Component</h1>
            <h4>COUNT: {count}</h4>
            <button onClick={()=>setCount(count+5)}>Parent Count</button>
            
                
                <Child onIncrease={handleIncrease}/>

        </div>
    )
}

export default Parent;