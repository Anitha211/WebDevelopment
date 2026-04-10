import React from "react";
import { useState } from "react";
import { CountContext } from "./createContext";
import B from "./UseContext"

function A(){

    let[a,seta] = useState(0);

    let [user, setUser] = useState({
            name: "Anitha",
            age: 22,
            city: "Kadapa"
        });
    
    return(
        <div>
            <CountContext.Provider value={{a,seta,user,setUser}}>
                <B/>
            </CountContext.Provider>
        </div>
    )
}

export default A;





