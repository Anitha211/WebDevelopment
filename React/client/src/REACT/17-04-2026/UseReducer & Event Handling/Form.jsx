import React, { useReducer } from "react";

let initialstate = {
    name: "",
    email: "",
    password: ""
};

function formReducer(state, action) {
    switch (action.type) {
        case "Update":
            return {
                ...state,
                [action.field]: action.value
            };

        case "Reset":
            return initialstate;

        default:
            return state;
    }
}
function Form() {

    let [state, dis] = useReducer(formReducer, initialstate);
    console.log(state);

    let handleChange = (e) => {
        dis({
            type: "Update",
            field: e.target.name,
            value: e.target.value
        })
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);

        dis({ type: "Reset" })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label><b>Name: </b></label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={state.name}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <label><b>Email: </b></label>
                <input type="email"
                    name="email"
                    placeholder="Email"
                    value={state.email}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <label><b>Password: </b></label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />

                <br></br>
                <br></br>

                <h3>{state.name}</h3>

                <button type="submit">Submit</button>

            </form>

        </div>
    )
}

export default Form;