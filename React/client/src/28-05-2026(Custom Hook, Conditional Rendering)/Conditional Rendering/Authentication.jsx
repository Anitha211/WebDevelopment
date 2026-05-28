import React, { useState } from "react";

function Authentication() {

    let [email, setEmail] = useState("");

    let [password, setPassword] = useState("");

    let [isLoggedIn, setIsLoggedIn] = useState(false);

    let [error, setError] = useState("");

    let handleLogin = () => {

        if(email === "admin@gmail.com" && password === "12345"){
            setIsLoggedIn(true);
            setError("");
        } else {
            setError("Invalid Email or Password");
        }
    };

    let handleLogout = () => {

        setIsLoggedIn(false);

        setEmail("");

        setPassword("");

        setError("");
    };


    return(

        <div>

            <h1>Authentication</h1>

            {isLoggedIn ? 
              <div>

                <h2>Welcome Admin</h2>

                <button onClick={handleLogout}>Logout</button>

              </div>    :  <div>

                <label>Email: </label>
                <input type="email" 
                       placeholder="Enter Email" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />

                <br/><br/>

                <label>Password: </label>
                <input type="password"
                       placeholder="Enter Password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                />

                <br/><br/>

                <button onClick={handleLogin}>Login</button>

                <br/><br/>

                {error && <p>{error}</p>}

              </div>
        }

        </div>
    )
}

export default Authentication;



