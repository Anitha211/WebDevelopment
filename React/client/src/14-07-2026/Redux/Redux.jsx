import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Redux() {

    let [product, setProduct] = useState("");

    let dis = useDispatch();

    let cartItems = useSelector((state) =>
        state.cart
    );

    let handleChange = (e) => {
        setProduct(e.target.value)
    };

    return (
        <div>
            <h2>Redux Example</h2>

            <input type="text"
                value={product}
                onChange={handleChange}
                placeholder="Enter Product"
            />

            <button onClick={() => dis({ type: "ADD", payload: product })}>Add to Cart</button>

            <h3>Cart Count: {cartItems.length}</h3>

            <div>
                {cartItems.map((item) => (
                    <p key={item}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Redux;


