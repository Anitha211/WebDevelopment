import React, { useState } from "react"

function useCounter(initialState=0) {
 let [count,setCount] = useState(initialState);

 let inc = () => {
    setCount(count+1)
 };

 let dec = () => {
    setCount(count - 1)
 };
return {count, inc, dec}
}

export default useCounter;