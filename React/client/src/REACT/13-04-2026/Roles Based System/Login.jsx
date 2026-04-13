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
        <div style={{background:"lightgray",padding:"15px", borderRadius:"20px"}}>
            {!isLogin ? <div>
                <h1>{role} Login</h1>

                <input type="text" placeholder="Enter UserName" />

                <br></br><br></br>

                <input type="password" placeholder="password"/>

                <br></br><br></br>
                <button onClick={handleLogin} 
                style={{background:"blue",color:"white", borderRadius:"4px",padding:"5px",margin:"5px",cursor:"pointer"}}>LOGIN</button>
                <button onClick={handleLogout}
                style={{background:"blue",color:"white", borderRadius:"4px",padding:"5px",margin:"5px",cursor:"pointer"}}
                >BACK</button>

            </div> : <div>
                <h2>Welcome to {role} Profile Page</h2>
                <p>{role} Page</p>
                <button onClick={handleLogout} 
                style={{background:"blue",color:"white", borderRadius:"4px",padding:"5px",margin:"5px",cursor:"pointer"}}
                >LOGOUT</button>
            </div> }

        </div>
    )
}
export default Login;


