import { useDispatch, useSelector } from "react-redux";
import { ToggleTheme } from "./ThemeSlice";
import { useState } from "react";
import { login, logout } from "./AuthSlice";

function Reducer() {

    let darkMode = useSelector((state) =>
        state.theme.darkMode
    );

    let dispatch = useDispatch();

    /////////

    let { isLogin, user } = useSelector((state) => state.auth);

    let [username, setUsername] = useState("");


    return (
        <div style={{ textAlign: "center" }}>

            <h1 style={{
                background: darkMode ? "#121212" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
                height: "50px", textAlign: "center", padding: "40px", borderRadius: "10px", margin: "70px", border: "1px solid black"
            }}>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

            <button onClick={() => dispatch(ToggleTheme())}
                style={{ padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}
            >Toggle Theme</button>

            {/*  */}
            <br></br>
            <br></br>
            <hr></hr>

            <div style={{ padding: "20px", textAlign: "center" }}>

                <h1>Login</h1>
                {!isLogin ? (
                    <div>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{
                                padding: "10px", borderRadius: "5px",
                                border: "1px solid gray", marginBottom: "10px"
                            }}
                        />
                        <br></br>
                        <br></br>
                        <button onClick={() => dispatch(login(username))}
                            style={{
                                padding: "8px 15px", background: "blue",
                                color: "white", borderRadius: "5px", cursor: "pointer"
                            }}
                        >Login</button>
                    </div>
                ) : (
                    <div>
                        <h3 style={{ color: "green" }}>Welcome, {user}</h3>
                        <button onClick={() => dispatch(logout())}
                            style={{
                                padding: "8px 15px", background: "red",
                                color: "white", borderRadius: "5px", cursor: "pointer"
                            }}
                        >Logout</button>
                    </div>
                )}

            </div>

            
        </div>
    )
}

export default Reducer;














