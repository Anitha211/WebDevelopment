import { createStore } from 'redux'

let initialState = {
    user:{
        name:"Vidya",
        age: 20,
        city: ""
    }
}
function reducer(state=initialState,action){
    switch (action.type) {
        case "ChangeUser":
            return {
                ...state,
                user: {
                    name:"Vidya",
                    age: 22,
                    city: "HYD"
                }
            };
            default:
                return state;
        }
}
export let store = createStore(reducer);