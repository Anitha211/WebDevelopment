import React, { useReducer } from "react";

let initialState = {
    count : 0
};

function reducer(state, action) {

    switch(action.type) {
        case "Increment" : 
        return{
            count: state.count + 1
        };

        case "Decrement" :
            return{
                count: state.count - 1
            }

            case "Reset":
                
                    return initialState;

                    default:
                        return state;
    }

}

function Count() {

    let [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>

            <h2>Count: {state.count}</h2>

            <button onClick={() => dispatch({type: "Increment"})}>Increment</button>

            <button onClick={() => dispatch({type:"Decrement"})}>Decrement</button>

            <button onClick={() => dispatch({type: "Reset"})}>Reset</button>

        </div>
    )
}

export default Count;


