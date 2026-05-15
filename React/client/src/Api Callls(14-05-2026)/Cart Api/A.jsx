import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
import "./style.css"

function A() {

    let[cart, setCart] = useState([]);

    let addToCart = (product) => {

        let exitItem = cart.find((item) => 
               item.id === product.id
        );

        let UpdateCart = exitItem ? cart.map((item) => 
        item.id === product.id ? {...item, quantity:item.quantity + 1} : item
        ) : [...cart, {...product, quantity: 1}]

        setCart(UpdateCart);
    };

    let IncreaseQty = (id) => {
        let UpdateCart = cart.map((item) => item.id === id ? 
              {...item, quantity:item.quantity + 1}
              : item
    );
    setCart(UpdateCart);
    };

    let DecreaseQty = (id) => {
        let UpdateCart = cart.map((item) => item.id === id ? 
              {...item, quantity:item.quantity - 1}
              : item
    )
    .filter((item) => item.quantity > 0);
    setCart(UpdateCart);
    }

    let RemoveItem = (id) => {
        let UpdateCart = cart.filter((item) => item.id !== id);
    setCart(UpdateCart);
    }


    return(
        <div className="container">

            <Products addToCart ={addToCart}/>

            <Cart cart={cart}
                  IncreaseQty={IncreaseQty}
                  DecreaseQty={DecreaseQty}
                  RemoveItem={RemoveItem}
            />

        </div>
    )
}

export default A;

// https://fakestoreapi.com/products
