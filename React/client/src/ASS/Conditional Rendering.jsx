import React from "react";
import { useState } from "react";

function Login(){

    let [login, setLogin] = useState(true);

    return(
        <div>
            <button onClick={() => setLogin(false)}>
                { login ? <h1>Login</h1> : <h2>Logout</h2> }
            </button>

        </div>
    )
}

export default Login;