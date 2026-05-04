import React, { useCallback, useMemo, useState } from "react";

import Product from "./Product";

function Cart() {

    let [Products, setProducts] = useState([
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Phone", price: 15000 },
        { id: 3, name: "Headphones", price: 2000 }
    ]);

    console.log("Cart Rendered");

    let deleteProduct = useCallback((id) => {
        console.log("Deleted: ", id);
        setProducts(prev => prev.filter(item =>
            item.id !== id
        ));
    }, []);

    let totalPrice = useMemo(() => {
        return Products.reduce((sum, item) =>
            sum + item.price, 0)
    }, [Products]);

    
    return (

        <div style={{ textAlign: "center" }}>

            <h1 style={{
                color: "Blue", border: "1px solid skyblue",
                padding: "5px", margin: "20px", borderRadius: "20px"
            }}>Shopping Cart</h1>

            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                {Products.map((item) => (
                    <Product key={item.id}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        onDelete={deleteProduct}
                    />
                ))}

            </div>

            <h3>Total Price: {totalPrice}</h3>

        </div>
    )
}

export default Cart;




