import React, { useState } from "react"

function Profile({ role, setRole }) {

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
            {role == "Employee" ? !isLogin ? <div>
                <h1>Employee Login</h1>
                <input type="text" placeholder="Username" />
                <br />
                <br />
                <input type="password" placeholder="password" />
                <br />
                <br />
                <button onClick={handleLogin} style={{ margin: "3px" }}>LOGIN</button>
                <button onClick={handleLogout}>Back</button>
            </div> : <div>
                <h2>Welcome to Employee Profile Page</h2>
                <p>{role} Page</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
                : role == "HR" ?
                    !isLogin ? <div>
                        <h1>HR Login</h1>
                        <input type="text" placeholder="Username" />
                        <br />
                        <br />
                        <input type="password" placeholder="password" />
                        <br />
                        <br />
                        <button onClick={handleLogin} style={{ margin: "3px" }}>Login</button>
                        <button onClick={handleLogout}>Back</button>
                    </div> : <div>
                        <h2>Welcome to HR Profile Page</h2>
                        <p>{role} page</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    : role == "Admin" ?
                        !isLogin ? <div>
                            <h1>Admin Login</h1>
                            <input type="text" placeholder="Username" />
                            <br />
                            <br />
                            <input type="password" placeholder="password" />
                            <br />
                            <br />
                            <button onClick={handleLogin} style={{ margin: "3px" }}>Login</button>
                            <button onClick={handleLogout}>Back</button>
                        </div> : <div>
                            <h2>Welcome to Admin Profile Page</h2>
                            <p>{role} page</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                        : role == "Manager" ?
                            !isLogin ?
                                <div>
                                    <h1>Manager Login</h1>
                                    <input type="text" placeholder="Username" />
                                    <br />
                                    <br />
                                    <input type="password" placeholder="password" />
                                    <br />
                                    <br />
                                    <button onClick={handleLogin} style={{ margin: "3px" }}>Login</button>
                                    <button onClick={handleLogout}>Back</button>
                                </div> : <div>
                                    <h2>Welcome to Manager Profile Page</h2>
                                    <p>{role} page</p>
                                    <button onClick={handleLogout}>Logout</button>
                                </div>
                            : null}
        </div>
    )
}
export default Profile;