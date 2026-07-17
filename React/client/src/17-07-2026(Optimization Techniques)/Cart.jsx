import React from "react";

let Cart = React.memo(({products, addProduct}) => {

    console.log("Cart Component Rendered");

    return (

        <div>

            <button onClick={addProduct}>Add Product</button>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product Name</td>
                        <td>Price</td>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>

                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
})

export default Cart;


