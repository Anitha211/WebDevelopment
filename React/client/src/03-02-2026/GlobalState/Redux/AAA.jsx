import { createStore } from 'redux'


let initialState = {
    sum:50,
    text: "Redux"
};

function reducer(state=initialState,action){
    switch (action.type) {
        case "Increase":
            return {...state,
                sum: state.sum + 1
            };

            case "Decrease":
                
                 return {...state,
                sum: state.sum - 1
            };
            case "ChangeText":
                 return {...state,
                text: "React-Redux"
            };
                default:
                    return state
    }
}
export let store = createStore(reducer);