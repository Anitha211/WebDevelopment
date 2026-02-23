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
        <div style={{ color: "navy", fontSize: "30px" }}>

            {!isLogin ? 

            <div>
                <h1>{role} Login</h1>

                <input type="text" placeholder="Enter UserName" 
                    style={{ color: "Black", fontSize: "25px" }} />
                <br></br>
                <br></br>
                <input type="password" placeholder="password"
                    style={{ color: "Black", fontSize: "25px" }} />
                <br></br>
                <br></br>
                <button onClick={handleLogin}
                        style={{margin: "3px", borderRadius: "10px", padding: "10px",
                        marginBlock: "10px", backgroundColor: "snow",cursor:"pointer",fontSize:"25px"}}
                    >LOGIN</button>

                <button onClick={handleLogout}
                        style={{margin: "3px", borderRadius: "10px", padding: "10px",
                        marginBlock: "10px", backgroundColor: "snow",cursor:"pointer",fontSize:"25px"}}
                   >BACK</button>

            </div> : <div>

                <h2>Welcome to {role} Profile Page</h2>
                <p>{role} Page</p>

                <button onClick={handleLogout}
                        style={{ margin: "3px", borderRadius: "10px", padding: "10px",
                        marginBlock: "10px", backgroundColor: "snow",cursor:"pointer",fontSize:"25px"}}
                    >LOGOUT</button>

                </div>
                }

        </div>
    )
}
export default Login;