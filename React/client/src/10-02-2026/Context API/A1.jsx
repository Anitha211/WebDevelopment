import React, { useState } from "react";
import { Context1 } from "./A";
import A2 from "./A2"

function A1(){
   
    let [n, setn] = useState("React js");

    let Change = () => {
            setn("Context API")
        }

        // 
        // 

    let [count,setCount] = useState(0);

    let inc = () => {
        setCount(count+1)
    };
    let dec = () => {
        setCount(count-1)
    };
    let reset = () => {
        setCount(0)
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Context AP1</h1>
            <Context1.Provider value={{n, Change, count, inc, dec, reset}} >
                <A2/>
            </Context1.Provider>

        </div>
    )
}

export default A1;