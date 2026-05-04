import React, { useContext } from "react";
import CartContext from "./CreateContext";

function CartDisplay() {

    let {state,dispatch} = useContext(CartContext);

    return(
        <div>
            <h1>Cart Items: {state.count}</h1>

            <button onClick={() => dispatch({type:"Inc"})}>Add Item</button>

            <button onClick={() => dispatch({type:"Dec"})}>Remove Item</button>

            <button onClick={() => dispatch({type:"Reset"})}>Reset</button>
        </div>
    )
}

export default CartDisplay;