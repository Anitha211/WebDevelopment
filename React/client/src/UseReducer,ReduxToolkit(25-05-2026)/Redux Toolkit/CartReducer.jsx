import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "./CartSlice";
import "./Cart.css"

function CartReducer() {

    // Cart

    let { cartItems, totalAmount } = useSelector((state) => state.cart);

    let products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 20000 },
        { id: 3, name: "Headphones", price: 3000 }
    ];

    let d = useDispatch();

    return (

        <div className="container">

            <div className="section">

                <h1 className="heading">Products</h1>

                {products.map((Product) => (
                    <div key={Product.id} className="card">

                        <h3>{Product.name}</h3>
                        <p>{Product.price}</p>

                        <button onClick={() => d(addToCart(Product))} className="add-btn">
                            ADD TO CART</button>

                    </div>
                ))}
            </div>
            <br />

            <div className="section">

                <h1 className="heading">Cart</h1>

                {cartItems.length === 0 ?
                    <h3 className="empty">Cart is Empty</h3> :

                    cartItems.map((item) => (
                        <div key={item.id} className="card">

                            <h3>{item.name}</h3>

                            <p>Price: {item.price}</p>

                            <p>Quantity: {item.quantity}</p>

                            <p>Total: {item.price * item.quantity}</p>

                            <button className="plus-btn"
                                onClick={() => d(addToCart(item))}>
                                + </button>

                            <button className="minus-btn"
                                onClick={() => d(removeCart(item.id))}>
                                - </button>

                        </div>
                    ))
                };

                <h2 className="total">Total Amount: {totalAmount}</h2>

            </div>

        </div>
    )
};

export default CartReducer;




