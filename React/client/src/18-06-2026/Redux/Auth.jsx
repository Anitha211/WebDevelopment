import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Auth() {

    let d = useDispatch();

    let isLoogedIn = useSelector((state) => state.isLoogedIn);
    
    let username  = useSelector((state) => state.username);

    let login = () => {
        d({
            type: "LOGIN",
            payload: "John Doe",
        });
    };

    let logout = () => {
        d({
            type: "LOGOUT",
        });
    };

    return(

        <div>

            <h1>Login / Logout Authentication</h1>

            {
            isLoogedIn ? <div>
                <h2>Welcome, {username}</h2>
                <button onClick={logout}>Logout</button>
            </div> :  <div>
                <h2>Please Login</h2>
                <button onClick={login}>Login</button>
                </div>
                }

        </div>
    )
}

export default Auth;