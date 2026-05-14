import React, { useState } from "react";

let Product1 = React.memo(({ product, addToCart, deleteProduct, removeQty }) => {

    console.log(`${product.name} Rendered`);
    let [like, setLike] = useState(false);

    return (
        <div className="card">

            <img src={product.image} alt={product.name} width="200px" />

            <h3>{product.name}</h3>

            <p>Price: {product.price}</p>

            <p>Quantity: {product.quantity}</p>

            

            <button className="cart-btn" onClick={() => addToCart(product.id)}> + </button>
            <button className="remove-btn" onClick={() => removeQty(product.id)}> - </button>


            <button className="like-btn" onClick={() => setLike(!like)}>
                {like ? "LIKED" : "LIKE"}</button>

            <button className="delete-btn" onClick={() => deleteProduct(product.id)}>DELETE</button>

        </div>
    )
})

export default Product1;



