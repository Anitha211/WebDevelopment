import React, { useReducer } from "react";

let initialstate =  {
    count: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case "Inc":
            return {
                count: state.count + 1
            }

        case "Dec":
            return {
                count: state.count - 1
            }

        case "Reset":
            return {
                count: 0
            }

        default:
            return state;
    }
}

function Counter() {
    let [state, dispatch] = useReducer(reducer, initialstate)
    console.log(state);

    return (

        <div>
            <h1>UseReducer</h1>
            <h3>Counter: {state.count}</h3>

            <button onClick={() => { dispatch({ type: "Inc" }) }}>
                Increase</button>
            <button onClick={() => { dispatch({ type: "Dec" }) }}>
                Decrease</button>
            <button onClick={() => { dispatch({ type: "Reset" }) }}>
                Reset</button>

        </div>
    )
}

export default Counter;

