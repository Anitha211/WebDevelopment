import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { login, logout } from "./AuthSlice";
import { decrease, increase, reset } from "./CountSlice";

function Reducer() {

    let count = useSelector((state) =>
        state.count.value)
    // 

    let { isLogin, user } = useSelector((state) => state.auth);

    let [username, setUsername] = useState("");

    let dispatch = useDispatch();

    return (
        <div style={{textAlign: "center" }}>

            <h1>Count:{count}</h1>

            <button onClick={() => dispatch(increase())}>Increase</button>

            <button onClick={() => dispatch(decrease())}>Decrease</button>

            <button onClick={() => dispatch(reset())}>Reset</button>

            <br></br>
            <hr></hr>
            <br></br>

            <h1>Login</h1>
            {!isLogin ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <button onClick={() => dispatch(login(username))}
                    >Login</button>
                </div>

            ) : (
                
                <div>
                    <h3>Welcome, {user}</h3>
                    <button onClick={() => dispatch(logout())}
                    >Logout</button>
                </div>
            )}

        </div>
    )
}

export default Reducer;
















