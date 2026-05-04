import React, { useReducer } from "react";
import CartContext from "./CreateContext";
import CartDisplay from "./CartDisplay";


let initialState = {count:0};


function reducer(state,action){
    switch(action.type){
        case "Inc": 
        return {
            count: state.count + 1
        };
        case "Dec":
            return {
                count: state.count - 1
            };
            case "Reset":
                return {
                    count: 0
                };
                default:
                    return state;
    }
};

// 
function Cart() {
    let [state, dispatch] = useReducer(reducer,initialState);

    return(
        <CartContext.Provider value={{state,dispatch}}>
            <CartDisplay/>

        </CartContext.Provider>
    )
}

export default Cart;