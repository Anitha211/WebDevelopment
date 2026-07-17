import React, { useCallback, useState } from "react";
import Cart from "./Cart";

function Product() {

    let [ products, setProducts] = useState([
        
        {id:1, name: "Laptop", price: 70000 },
        {id:2, name: "IPhone", price: 100000},
        {id:3, name: "HeadPhones", price: 5999}

    ]);

    let addProduct = useCallback(() => {

        setProducts((product) => [
            ...product, {

                id: product.length + 1,
                name: "Watch",
                price: 2599
            }
        ])
    }, []);

    return (

        <div>

            <h2>Shopping Cart</h2>

            <Cart products={products}
                  addProduct={addProduct}/>

        </div>
    )
}

export default Product;