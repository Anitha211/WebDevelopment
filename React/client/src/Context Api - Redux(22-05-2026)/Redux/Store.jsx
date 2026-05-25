import { createStore } from "redux";

let initialState = {
    count: 0,
    todos: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count < 20 ?
                    state.count + action.payload : 20
            };

        case "DECREMENT":
            return {
                ...state,
                count: state.count > 0 ? state.count - 1 : 0
            };

        case "RESET":
            return {
                ...state,
                count: 0
            };

        case "INCREMENT_BY_5":
            return {
                ...state,

                count: state.count + 5
            };

        case "DECREMENT_BY_10":
            return {
                ...state,
                count: state.count >= 10 ?
                    state.count = 10 : 0
            };

        case "ADD_TODO":
            return {
                ...state,

                todos: [
                    ...state.todos,
                    action.payload
                ]
            };

        case "DELETE_TODO":
            return {
                ...state,
                todos: [
                    state.todos.filter((_, index) =>
                        index !== action.payload)
                ]
            };

        default:
            return state;

    }
};

let store = createStore(reducer);

export default store;




