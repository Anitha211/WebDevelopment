import React, { useCallback, useState, useMemo} from "react";

import C1 from "./C1"
import C2 from "./C2"
import C3 from "./C3"
import "./style.css"

function P1(){

    let [age,setage] = useState(18);

    let [count,setCount] = useState(10);

    let updateAge = useCallback(()=>{
        setage(age + 1); 
    },[age]);

    let updateCount = useCallback(()=>{
        setCount(count + 10); 
    },[count]);

    let UseMemo = useMemo(()=>{
            return count*2 
        },[count]) 

    console.log("parent component is running....!");

    return(
        <div className="container">
            
            <h1 className="card">P1 Component</h1>
           
            <C1 age={age}
                updateAge={updateAge}
                />

            <C2 count = {count} 
                updateCount={updateCount}
                UseMemo={UseMemo}/>

            <C3/>
            

        </div>

    )
}

export default P1;