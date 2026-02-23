import React from "react";

let Product = React.memo(({id, name, price, onDelect}) => {

    console.log("Product Rendered:", name);
    

    return(

        <div className="Card">

            <p className="name">Name: {name}</p>
            <p className="price">Price - {price}</p>
            <button className="btn1" onClick={() => onDelect(id)}> DELECT</button>

        </div>
    )
})

export default Product;