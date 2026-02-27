import { createStore } from "redux";

let initialState = {
    user:{
        name: "",
        email: "",
    }
}

function userReducer(state=initialState,action){
switch (action.type) {
    case "AddUser": {
        return {
            ...state,
            user:{
                name: action.payload.name,
                email: action.payload.email,
            }
        };
    }
    case "ClearUser": {
        return state = initialState
    };
    
    default:
    return state;
   }
}
export let Store = createStore(userReducer);