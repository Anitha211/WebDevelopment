import React, { useCallback, useMemo, useState } from "react";
import Product from "./Product";

function Cart() {

    let [product, setProduct] = useState([
        { id: 1, name: "Watch", price: 5000},
        { id: 2, name: "Phone", price: 15000 },
        { id: 3, name: "Headphones", price: 2000 }
    ]);

    console.log("Cart Rendered");

    let deleteProduct = useCallback((id) => {
        console.log("Deleted: ", id);
        setProduct(prev => prev.filter(item =>
            item.id !== id
        ));
    }, []);

    let totalPrice = useMemo(() => {
        return product.reduce((sum, item) =>
            sum + item.price, 0)
    }, [product]);

    return (

        <div>

            <h1>Shopping Cart</h1>

            <div>
                {product.map((item) => (
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




