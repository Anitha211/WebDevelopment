import { createStore } from "redux";

let initialState = {
   products:[
        {id:1, name:"Shirt", price: 1000, quantity:0},
        {id:2, name:"Shoes", price: 2000, quantity:0},
        {id:3, name:"Watch", price: 1500, quantity:0}
   ]
}

function Reducer(state=initialState,action){
switch (action.type) {
    case "Increase": 
        return {
             ...state,
             products: state.products.map(product => 
                product.id == action.payload ? {...product,quantity:product.quantity+1 } : product)
        };
    
        case "Decrease":
            return {
                ...state,
             products: state.products.map(product => 
                product.id == action.payload ? {...product,quantity:product.quantity > 0 ? 
                    product.quantity - 1 : 0} : product)
            };
            case "Reset":
                return{
                    ...state,
                   products: state.products.map(product => ({
                    ...product,
                    quantity: 0
                   }))
                };
                default:
                    return state;
                }
            }
export let Store1 = createStore(Reducer)