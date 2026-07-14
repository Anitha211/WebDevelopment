import React, { useState } from "react";
import A from "./createContext";
import UserLogin from "./UserLogin";

function UserContext() {

    let [user, setUser] = useState("Guest");

    function login() {
        setUser("John");
    };

    function logout() {
        setUser("Guest");
    };

    return (

        <A.Provider value={{user, login, logout}}>

            <UserLogin/>

        </A.Provider>
    )
}

export default UserContext;