import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./AuthSlice";

function Auth() {

    let { isLogin, user } = useSelector((state) => state.auth);

    let [username, setUsername] = useState("");

    let dispatch = useDispatch();

    return (

        <div>

            <h1>Login</h1>
            {!isLogin ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /> <br/><br/>

                    <button onClick={() => 
                    dispatch(login(username))}
                    >Login</button>
                </div>
            ) : (
                <div>
                    <h3 style={{ color: "green" }}>Welcome, {user}</h3>

                    <button onClick={() => 
                    dispatch(logout())}
                    >Logout</button>
                </div>
            )}

        </div>
    )
}

export default Auth;