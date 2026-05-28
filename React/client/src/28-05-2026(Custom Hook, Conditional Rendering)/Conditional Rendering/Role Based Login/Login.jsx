import React, { useState } from "react"

function Login({ role, setRole }) {

    let [isLogin, setLogin] = useState(localStorage.getItem("isLogin") == "true");

    let handleLogin = () => {
        localStorage.setItem("isLogin", "true");
        setLogin(true)
    }

    let handleLogout = () => {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("role")
        setLogin(false);
        setRole("");
    }

    return (
        <div>

            {!isLogin ? 

            <div>
                <h1>{role} Login</h1>

                <label>Email: </label>
                <input type="text" placeholder="Enter UserName"/>
                <br/>
                <br/>
               
                <label>Password: </label>
                <input type="password" placeholder="password" />

                <br/><br/>
                <button onClick={handleLogin} >LOGIN</button>

                <button onClick={handleLogout}>BACK</button>

            </div> : <div>

                <h2>Welcome to {role} Profile Page</h2>
                <p>{role} Page</p>

                <button onClick={handleLogout}>LOGOUT</button>

                </div>
                }

        </div>
    )
}
export default Login;












