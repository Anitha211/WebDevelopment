import React, { useReducer } from "react";


let initialState = {
    name: "",
    email: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "Setname":
            return {
                ...state, name: action.payload
            }

        case "Setemail":
            return {
                ...state, email: action.payload
            };

        case "Reset":
            return initialState;

        default:
            return state;
    }
}

function Form() {

    let [state, dispatch] = useReducer(reducer, initialState);

    return (

        <div>

            <label>Name: </label>
            <input type="text" placeholder="Name"
                value={state.name}
                onChange={(e) => dispatch({ type: "Setname", payload: e.target.value })} />

            <br /><br />

            <label>Email: </label>
            <input type="email" placeholder="Email"
                value={state.email}
                onChange={(e) => dispatch({ type: "Setemail", payload: e.target.value })} />

            <br /><br />

            <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>

        </div>
    )
}

export default Form;


