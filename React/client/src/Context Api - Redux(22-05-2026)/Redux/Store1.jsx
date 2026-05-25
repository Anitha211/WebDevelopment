import { createStore } from "redux";

let initialState = {

    count2: 0,
};

function reducer(state = initialState, action) {
    switch (action.type) {

        case "Increase":
            return {
                ...state,
                count2: state.count2 + 1
            };

        case "RESET":
            return {
                ...state,
                count2: 0
            };

        default:
            return state;
    }

}

let store1 = createStore(reducer);

export default store1;

