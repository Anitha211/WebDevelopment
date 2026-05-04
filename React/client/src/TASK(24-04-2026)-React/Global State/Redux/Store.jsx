import {createStore} from "redux";

let initialState = {
    cart: [],
}

function cartReducer (state =initialState,action){
    switch(action.type){
        case "ADD":
            return {
                ...state,
                cart:[...state.cart,action.payload],
            };

            default:
                return state;
    }
}
export let store = createStore(cartReducer);