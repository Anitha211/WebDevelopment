import React, { useContext } from "react";
import A from "./createContext";

function UserLogin() {

    let {user, login, logout} = useContext(A);

    return(

        <div>

            <h2>Welcome {user}</h2>

            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>

        </div>
    )
}

export default UserLogin;




