import { createStore } from "redux";

let initialState = {
    number : 0,
    type :"Even"
}

function reducer(state=initialState,action){
switch (action.type) {
    case "Increase": {
        let Num = state.number + 1;
        if(Num % 2 == 0){
            return {
                number : Num,
                type: "Even"
            };
        } else {
            return {
                number : Num,
                type: "Odd"
            };
        }
    }
    
    case "Decrease": {
        let Num = state.number - 1;
        if(Num % 2 == 0){
            return {
                number : Num,
                type: "Even"
            };
        } else {
            return {
                number : Num,
                type: "Odd"
            };
        }
    }

    case "Reset":
      return {
        number : 0,
        type: "Even"
      }
    
    
    default:
    return state;

    }
}

export let a = createStore(reducer)