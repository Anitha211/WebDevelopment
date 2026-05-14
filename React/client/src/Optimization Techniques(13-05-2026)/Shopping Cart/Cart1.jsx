import React, { useCallback, useMemo, useState } from "react";
import Product1 from "./Product1";
import "./style.css"

function Cart1() {

    let [products, setProducts] = useState([
        { id: 1, name: "Headphones", price: 2000, image: "./Headphones.jpg", quantity:0},
        { id: 2, name: "SmartWatch", price: 2500, image: "./Smart Image.avif", quantity:0},
        { id: 3, name: "Shoes", price: 3000, image: "./Shoes.jpeg", quantity:0 }
    ]);

    let addToCart = useCallback((id) => {
        setProducts((prev) => prev.map((item) => 
            item.id === id ? 
        {...item, quantity:item.quantity + 1} : item));
    }, [])

    let removeQty = useCallback((id) => {
        setProducts((prev) => prev.map((item) => 
            item.id === id ? 
        {...item, quantity:item.quantity - 1} : item));
    }, [])

    let deleteProduct = useCallback((id) => {
        console.log("Deleted:", id);

        setProducts((prev) => prev.filter((item) =>
            item.id !== id));

    }, []);

    let totalCart = useMemo(() => {
         return products.reduce((sum, item) =>
            sum + item.quantity, 0);

    }, [products]);

    let totalPrice = useMemo(() => {
        console.log("Calculating Total..");

         return products.reduce((sum, item) =>
            sum + item.price *  item.quantity, 0);

    }, [products]);

    return (

        <div className="cart-container">
            <h1>Shopping Cart</h1>

            <h2>Cart Quantity: {totalCart}</h2>

            <div className="products-container">

                {products.map((product) => (
                    <Product1 key={product.id}
                        product={product}
                        addToCart={addToCart}
                        removeQty={removeQty}
                        deleteProduct={deleteProduct}
                    />
                ))}
            </div>

            <h2>Total Price: {totalPrice}</h2>
        </div>
    )
}

export default Cart1;


