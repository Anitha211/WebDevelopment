import React, { useReducer } from "react";

let initialstate = false;

function reducer(state, action) {
    switch(action.type) {
        case "login":
            return true;

            case "logout":
                return false;

                default:
                    return state;
    }
};

function Login() {
    let [isLogin, dispatch] = useReducer(reducer, initialstate);

    <div>

        <h2>{isLogin ? "Welcome User" : "Please Login"}</h2>

        <button onClick={() => dispatch({type: "login"})}>Login </button>

        <button onClick={() => dispatch({type: "logout"})}>Logout</button>

    </div>
}

export default Login;