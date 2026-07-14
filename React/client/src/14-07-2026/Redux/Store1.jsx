import { createStore } from "redux";

let initialState = {
    employee: "No Employee"
};

function employeeReducer(state=initialState,action) {
    switch(action.type) {

        case "ADD_EMPLOYEE":
            return {
                ...state,
                employee: "Lakshmi"
            };

            case "REMOVE_EMPLOYEE":

            return {
                ...state,
                employee: "No Employee"
            };

            default:
                return state;
    }
}

export let Store1 = createStore(employeeReducer);