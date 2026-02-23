import { createStore } from "redux";

let initialState = {
    quantity: 1,
}

function todoReducer(state=initialState,action){
    switch (action.type) {
        case "Increment":
            console.log(action.payload);
            return {
                quantity: state.quantity + action.payload
        }
        case "Decrement":
            console.log(action.payload);
            return{
               quantity: state.quantity > 1 ? state.quantity - action.payload : state.quantity
            }
        
            default:
                return state;
    }

}

export let store = createStore(todoReducer)


