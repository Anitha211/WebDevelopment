import React, { useReducer } from "react";

let initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    Message: ""
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload,
                emailError: "",
                Message: ""
            };

        case "SET_PASSWORD":
            return {
                ...state,
                password: action.payload,
                passwordError: "",
                Message: ""
            };

        case "SET_ERRORS":
            return {
                ...state,
                emailError: action.payload.emailError,
                passwordError: action.payload.passwordError,
                Message: "",
            };

        case "LOGIN":
            return {
                ...state,
                Message: "Login Successful",
                emailError: "",
                passwordError: ""
            };

        default:
            return state;
    }
}

function Form() {

    let [state, dispatch] = useReducer(reducer, initialState);

    let handleLogin = () => {
        let emailError = "";
        let passwordError = "";

        if (!state.email.includes("@")) {
            emailError = "Enter vaild email";
        }

        if (state.password.length < 6) {
            passwordError = "Password must be atleast 6 characters"
        }

        if (emailError || passwordError) {
            dispatch({
                type: "SET_ERRORS",
                payload: {
                    emailError,
                    passwordError
                },
            });

            return;
        }

        dispatch({
            type: "LOGIN",
        });
    };

    return (

        <div>

            <h1>Login Form</h1>

            <div>
                <label>Email: </label>
                <br />
                <input type="text" placeholder="Enter email"
                    value={state.email}
                    onChange={(e) => dispatch({
                        type: "SET_EMAIL",
                        payload: e.target.value,
                    })
                    }
                />

                <br />

                {state.emailError &&
                    <p>{state.emailError}</p>
                }
            </div>

            <br />

            <div>
                <label>Password: </label> <br />

                <input type="password"
                    placeholder="Enter password"
                    value={state.password}
                    onChange={(e) => dispatch({
                        type: "SET_PASSWORD",
                        payload: e.target.value,
                    })}
                />

                <br />
                {state.passwordError &&
                    <p>{state.passwordError}</p>
                }

            </div>

            <br />

            <button onClick={handleLogin}>Login</button>

            {state.Message &&
                <p>{state.Message}</p>
            }

        </div>
    )
}

export default Form;


