import React, { useState } from "react";

function LoginForm() {

    let [name, setName] = useState("");

    let [isLoggedIn, setIsLoggedIn] = useState(false);

    let handleLogin = () => {
        setIsLoggedIn(true)
    };

    return(

        <div>
            <h2>Login System</h2>

            {! isLoggedIn ? <div>

                <input type="text" placeholder="Enter name"
                value={name} onChange={(e) =>setName(e.target.value)}/>

                <br/><br/>

                <button onClick={handleLogin}>Login</button>

            </div> : <div>

                <h3>Welcome, {name}</h3>

                <button onClick={() => setIsLoggedIn(false)}> Logout</button>

                </div>
                }

        </div>
    )
}

export default LoginForm;