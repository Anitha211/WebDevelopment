import React, { useCallback, useMemo, useState } from "react";

import FoodItem from "./FoodItem";



function Menu() {

    let [cart, setCart] = useState([]);


    let [count, setCount] = useState(0);

     let menuitem = [
        { id: 1, name: "Pizza", price: 249 },
        { id: 2, name: "Burger", price: 129 },
        { id: 3, name: "Pasta", price: 199 }
    ];

    let addToCart = useCallback((food) => {
        setCart((prevCart) => [...prevCart, food])
    }, []);

    let totalPrice = useMemo(() => {
        console.log("Calculating Total....");
        return cart.reduce(
            (total, item) => total + item.price, 0
        )
    }, [cart]);

    return (

        <div>

            <h1>Food Ordering App</h1>

            <button onClick={() => setCount(count + 1)}> Counter {count}</button>

            <h2>Menu</h2>

            {menuitem.map((food) => (
                <FoodItem
                    key={food.id}
                    food={food}
                    addToCart={addToCart}
                />
            ))}

            <br/>

            <h2>Cart Items</h2>

            {cart.map((item, i) => (
                <p key={i}>
                    {item.name} - {item.price}
                </p>
            ))}

            <h2>Total Price: {totalPrice}</h2>
        </div>
    )
};

export default Menu;


