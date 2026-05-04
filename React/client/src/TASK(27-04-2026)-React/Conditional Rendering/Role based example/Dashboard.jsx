import React, { useState } from "react";

function Dashboard({ role, setRoles }) {

    let [isLogin, setLogin] = useState(
        localStorage.getItem("isLogin") === "true");


    let handleLogin = () => {
        localStorage.setItem("isLogin", "true");
        setLogin(true)
    };

    let handleLogout = () => {
        localStorage.removeItem("isLogin");
        localStorage.removeItem("role")
        setLogin(false);
        setRoles("")
    };

    return (
        <div>

            {!isLogin ? <div>
                <h1>{role} Login</h1>
                <input type="text"
                    placeholder="Enter username"
                />
                <br></br>
                <br></br>
                <input type="password"
                    placeholder="Enter Password"
                />
                <br/>
                <br/>

                <button onClick={handleLogin}>Login</button>
                <button onClick={handleLogout}>Go Back</button>

            </div> : <div>
                <h2>Welome to {role} Profile Page</h2>
                <p>{role} Page</p>
                <button onClick={handleLogout}>LOGOUT</button>
            </div>

            }

        </div>
    )
}

export default Dashboard;