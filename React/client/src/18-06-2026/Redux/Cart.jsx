import React from "react";

import {useSelector, useDispatch} from "react-redux";

function Cart() {

   let dispatch = useDispatch();

   let cart = useSelector((state) => state.cart);

   let product = {
    id: 1, name: "Laptop", price: 50000
   };

   let addTocart = (product) => {
    return{
        type: "ADD_TO_CART",
        payload: product,
    }
   };

   let removeFromCart = (id) => {
    return{
        type: "REMOVE_FROM_CART",
        payload: id,
    }
   };

    return(

        <div>

            <h1>Shopping Cart</h1>

            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>

            <button onClick={() => dispatch(addTocart(product))}>Add To Cart</button>

            <br/>

            <h2>Cart Items</h2>

            {cart.length === 0 ? <p>Cart is Empty</p> : 
             
             cart.map((item) => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>

                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
             ))
             
            }

        </div>
    )
}

export default Cart;