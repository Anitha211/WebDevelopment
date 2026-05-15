import React, { useEffect, useState } from "react";

function Product({ addToCart }) {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    return (
        <div>
            <h2 style={{color:"orangered", fontSize:"50px"}}>Products Lists</h2>
            <div className="products">
                {products.map((Product) => (
                    <div key={Product.id} className="card">
                        <img src={Product.image} alt={Product.title} />

                        <h4>{Product.title}</h4>
                        {/* <p>{Product.description}</p> */}
                        <p>${Product.price}</p>
                        
                        <button onClick={() => addToCart(Product)}>ADD TO CART</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Product;




