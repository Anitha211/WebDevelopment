import React, { useReducer } from "react"

let initialState = {
    quantity: 1
}

function cartReducer(state,action){
   switch(action.type){
    case "ADD":
        return{
            quantity: state.quantity + 1
        }
        case "REMOVE":
            return{
                quantity: state.quantity - 1
            }
            case "RESET":
                return{
                    quantity: 1
                }
                default:
                    return state;
   }
}


function B(){
    let[state,dispatch] = useReducer(cartReducer,initialState)
    console.log(state);

    
    return(
        <div style={{width:"250px",margin:"50px",padding:"20px",textAlign:"center",backgroundColor:"lightgray",border:"2px solid black",fontFamily:"monospace"}}>
            
            <h1>Cart Quantity</h1>
            <p><strong>Product : </strong> Apple</p>
            <p><strong>Quantity :</strong>{state.quantity}</p>
            <button onClick={()=> dispatch({type:"ADD"})} style={{margin:"5px"}}>ADD</button>
            <button onClick={()=> dispatch({type:"REMOVE"})} style={{margin:"5px"}}>REMOVE</button>
            <button onClick={()=> dispatch({type:"RESET"})} style={{margin:"5px"}}>RESET</button>

        </div>
    )
}

export default B