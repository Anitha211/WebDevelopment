import { createStore } from "redux";

let initialState = {
    user:{
        name: "",
        email: "",
    }
}

function reducer(state=initialState,action){
switch (action.type) {
    case "A": {
        return {
            ...state,
            user:{
                name: action.payload.name,
                email: action.payload.email,
            }
        };
    }
    case "Clear": {
        return state = initialState
    };
    
    default:
    return state;
}
}
export let b = createStore(reducer)