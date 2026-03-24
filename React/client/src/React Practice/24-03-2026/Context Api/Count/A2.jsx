import React, { useContext } from "react";
import { CountContext } from "./A";

function A2(){

    let {count, setCount, user, setUser } = useContext(CountContext);

    return(

        <div>

            <h2>Count: {count}</h2>

            <button onClick={()=> setCount(count+2)}>Increase</button>

            <button onClick={() =>setCount(count-2)}>Decrease</button>

            <h2>User Details</h2>
            <p>Name:{user.name}</p>
            <p>City:{user.city}</p>
            <br></br>
            <button onClick={()=> setUser({...user, city:"Hyderabad"})}>Change City</button>
            
            </div>
    )
}

export default A2;