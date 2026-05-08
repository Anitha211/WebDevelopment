import React, { useReducer } from "react";

let initialState = {
    count : 0
};

function Reducer (state,action){
    switch(action.type){
        case "Increment":
            return {
                count: state.count + 1
            }
            case "Decrement" :
                return{
                    count: state.count -1
                }

                case "Reset":
                    return{
                        count:0
                    }
                    default:
                    return state;
    }
}

function Counter() {


    let {state, dispatch} = useReducer(initialState,Reducer);

    return(
        <div>
            <h1>Counter using useReducer</h1>
            <h3>Counter: {state}</h3>

            <button onClick={() => dispatch({type:"Increment"})}>INCREMENT</button>
            <button onClick={() => dispatch({type:"Decrement"})}>DECREMENT</button>
            <button onClick={() => dispatch({type:"Reset"}) }>RESET</button>

        </div>
    )
}

export default Counter;