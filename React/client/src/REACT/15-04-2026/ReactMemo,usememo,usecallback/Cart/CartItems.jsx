import React from "react";

let CartItems = React.memo(({id, name, price, quantity, increaseQty, onDelect}) => {
    console.log("Item:", name);
    
    return(
        <div style={{border:"1px solid #ddd", padding:"15px", margin:"10px 0", borderRadius:"8px",display:"flex",
            justifyContent:"space-between",alignItems:"center"
        }}>
            
            <h3 style={{color:"navy", fontSize:"25px"}}>{name}</h3>
            <h3 style={{margin:"5px"}}>Price: {price}</h3>
            <h4 style={{margin:"5px"}}>Quantity: {quantity}</h4>
            <p style={{fontWeight:"bold",margin:"5px"}}>Total Quantity Price: {price * quantity}</p>

            <button style={{padding:"8px 12px",marginRight:"10px",color:"white",
                background:"blue",border:"1px solid #cab6b6",cursor:"pointer"}} 
                onClick={() => increaseQty(id)}>Add</button>

            <button style={{padding:"8px 12px",marginRight:"10px",color:"white",
                background:"red",border:"1px solid #cab6b6",cursor:"pointer"}}
                onClick={() => onDelect(id)}>DELECT</button>

        </div>
    )
})

export default CartItems;