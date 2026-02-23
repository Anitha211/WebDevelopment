import React, { useState } from "react"
import Parent from "./Parent"

function Child(){
    let a = 10;
    let [A,B] = useState(110);
    let [count, setCount] = useState(1);
    function Increase(){
        a++;
        console.log(a)
    }
    let inc = ()=>{
        B(A+1)
    }
    let increaseCount = ()=>{

        setCount(count + 1)
}
return(
    <div>
        <h3>Child.jsx (Parent Component)</h3>

        <button onClick={()=>{Increase(a)}}>Increase</button>
        <button onClick={inc}>Click</button>

        <button onClick={increaseCount}>Increase Count: {count}</button>
        
        
        <Parent value={count}/>
    </div>
    )
}
export default Child;