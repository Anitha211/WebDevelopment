import React from "react";

let Product = React.memo(({id, name, price, onDelete}) => {

    console.log("Product Component");
    
    return(
        <div style={{}}>

            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => onDelete(id)}>Delete</button>

        </div>
    )
})

export default Product;








