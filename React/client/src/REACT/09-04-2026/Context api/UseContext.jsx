import React from "react";
import { useContext } from "react";
import { CountContext } from "./createContext";

function B(){
    let {a, seta,user, setUser } = useContext(CountContext);
    return(
        <div>
            <h2>Count: {a}</h2>

            <button onClick={()=> seta(a+2)}>Increase</button>

            <button onClick={() =>seta(a-2)}>Decrease</button>

            <button onClick={() =>seta(0)}>Reset</button>


            <h2>User Details</h2>
            <p>Name:{user.name}</p>
            <p>City:{user.city}</p>
            <br></br>
            <button onClick={()=> setUser({...user, city:"Hyderabad"})}>Change City</button>
        </div>
    )
}

export default B; 










