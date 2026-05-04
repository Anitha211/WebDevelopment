import React from "react";

function Child2({quantity, updateQty}) {

    // Child to Child

    let incQty = () => {
        updateQty(quantity + 1)
    };

    let decQty = () => {
        if(quantity > 1){
        updateQty(quantity - 1)
        }
    };

    return(
        <div>
            <h3>Quantity</h3>
            <button onClick={decQty}>DECREASE -</button>
            <button onClick={incQty}>INCREASE +</button>
            </div>
    )
}

export default Child2;