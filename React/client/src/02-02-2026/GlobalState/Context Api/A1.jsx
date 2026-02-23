import React, { useState } from "react";
import { Context } from "./A";

import B from "./B"
import C from "./C"
import CC from "../../LocalState/useState/CC";
import A from "../../LocalState/useState/A";

// export let Context = createContext();
function A1() {

    let [a, seta] = useState(10);

    let [n, setn] = useState("Global State");
    let Change = () => {
        setn("Context API")
    }

    let [c, setc] = useState(100);

    let [user, setUser] = useState({
        name: "Bob",
        id: 1231,
        city: "Kadapa"
    })
    let UpdateUser = () => {
        setUser({
            ...user,
            name: "Bob",
            id: 12345,
            city: "Chennai",
            company: "NYB"
        })
    }
    return (
        <div>
            <h3>A</h3>
            <Context.Provider value={{ a, seta, n, Change, c, setc, user, UpdateUser }}>
                <B />
                <C />
                <CC />
            </Context.Provider>
            <A />
        </div>
    )
}

export default A1;