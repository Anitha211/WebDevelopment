import React from "react";

let product = React.memo(({id, name, price, Quantity , increaseQty , onDelect}) => {

    console.log("Product Rendered:", name);
    

    return(

        <div style={{border:"1px solid black", padding:"15px", margin: "10px", borderRadius:"8px",
                      display:"flex", justifyContent:"space-between"
        }}>

            <h3>{name}</h3>
            <h3>{price}</h3>
            <p>{Quantity}</p>
            <p>{price * Quantity}</p>

            <button onClick={() => increaseQty(id)}
                    style={{margin:"10px", padding: "5px", 
                        background: "Green", color:"white",borderRadius:"5px"}}
                >Increase</button>

            <button onClick={() => onDelect(id)}
                    style={{margin:"10px", padding: "5px", 
                        background: "red", color:"white",borderRadius:"5px"}}
                >DELECT</button>

        </div>
    )
})

export default product;