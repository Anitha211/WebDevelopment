import { useState } from "react"

import B from "./B"

function A(){
    let [num,setNum] = useState(0);

    let increaseNum = () => {
        setNum(num + 1)
    }

    let decreaseNum = () => {
        setNum(num - 1)
    }
    // 
    let [user,setUser] = useState({
        name: "Anitha",
        city : "Kadapa",
        id : 102
    })

    return(
        <div>
            <h3>Parent Component-A</h3>
            <h4>Increasing and Decreasing the Numbers</h4>
            <button onClick={increaseNum}>Decrease Number</button>
            <button onClick={decreaseNum}>Decrease Number</button>
            
            
            <B num={num}
               user={user} 
            />


        </div>
    )
}

export default A;