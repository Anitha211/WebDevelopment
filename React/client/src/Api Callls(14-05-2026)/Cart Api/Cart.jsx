import React from "react";

function Cart({IncreaseQty, DecreaseQty, RemoveItem, cart}) {

    let total = cart.reduce((acc, item) => 
        acc + item.price * item.quantity, 0
    ); 


    return(

        <div className="cart">
            <h1>Cart</h1>
            {cart.length === 0 ?
                  <h3>Cart is Empty</h3>    
                  :

                  cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <h4>Title: {item.title}</h4>
                        <p>Price: ${item.price} * {item.quantity}</p>

                        <div className="buttons">
                        <button onClick={() => DecreaseQty(item.id)}> - </button>
                        <button onClick={() => IncreaseQty(item.id)}> + </button>

                        <button onClick={() => RemoveItem(item.id)}>REMOVE</button>
                    </div>
                    <br/><br/>

                    </div>
            
                  ))
        }

        <h2>Total: ${total.toFixed(2)}</h2>
        </div>
    )
}

export default Cart;

