import React, { useState } from "react";

function A() {

    let [isLogin, setLoggin] = useState(false);
    let [show, setShow] = useState(false);

    let [username, setUsername] = useState("");

    let [password, setPassword] = useState("");

    let handleLogin = () => {
        if (username && password) {
            setLoggin(true)
        } else {
            setLoggin("please enter username and password")
        }
    };

    let handleLogout = () => {
        setLoggin(false)
        setUsername("")
        setPassword("")
    };

    return (

        <div>
            <h1>Login page</h1>

            {!isLogin ? <div>

                <input
                    type="text"
                    placeholder="Enter usernane"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <br/>
                <br/>

                <input
                    type={show ? "text" : "password"}
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} Password</button>

                <br/>
                <br/>

                <button onClick={handleLogin}>Login</button>

            </div> : <div>

                <h2>Welcome {username}</h2>
                <h3>Dashboard</h3>
                <p>Profile Section</p>
                <p>Settings</p>
                <p>Notification</p>

                <button onClick={handleLogout}>Logout</button>

            </div>
            }
        </div>
    )
}

export default A; 

