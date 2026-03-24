import React, { useState } from "react";
import { CountContext } from "./A";
import A2 from "./A2"

function A1(){
    let [count,setCount] = useState(0);

    let [user, setUser] = useState({
        name: "Anitha",
        age: 22,
        city: "Kadapa"
    });

    return(
        <div>

            <CountContext.Provider value={{count, setCount, user, setUser}}>
                <A2/>
            </CountContext.Provider>

        </div>
    )
}

export default A1;