import React, { useState } from "react"
import Login from "./Login";

function Profile() {
    let [isLogin, setLogin] = useState(false);

    let[username, setUsername] = useState("");

    let handleLOgin = () => {
        setLogin(true);
    };

    let handleLogout = () => {
        setLogin(false);
        setUsername("");
    };

    return (

        <div>
            <h2>Login</h2>

            {isLogin ? <div>
            <h3>Welcome, {username}</h3>
            <button onClick={handleLogout}>Logout</button>
            </div> : <Login
                          username={username}
                          setUsername={setUsername}
                          login={handleLOgin}
              />
            }
        </div>
    )}

export default Profile;