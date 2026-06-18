import { createStore } from "redux";

let initialState = {
    isLoggedIn: false,
    username: "",
};

function authReducer(state=initialState, action) {
    switch(action.type){
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload,
            };

            case "LOGOUT":
                return {
                    ...state,
                    isLoggedIn: false,
                    username: "",
                };

                default:
                    return state;
    }
}


export let store1 = createStore(authReducer);