import React, { useCallback, useMemo, useState } from "react";
import CartItems from "./CartItems";

function Cart(){

    let[product, setProduct] =useState([
        {id:1, name: "Book", price:220, Quantity: 1},
        {id:2, name: "T-Shirts", price:1500,  Quantity: 1},
        {id:3, name: "Watch", price:2000,  Quantity: 1}
    ]);
    console.log("Cart Component Rendered");

    let IncreaseQty = useCallback((id) => {
            setProduct((prev) => prev.map((item) => 
                  item.id == id ? {...item, Quantity: item.Quantity + 1 } : item)
        );
        },[]);

    // 
 
    let deleteProduct = useCallback((id)=>{
            console.log("Deleted:",id)
            setProduct(prev=>prev.filter(product => product.id !== id))
        },[]);


    // useMemo
    let totalcost = useMemo(()=>{
        return product.reduce((sum, item) => 
            sum + item.price * item.Quantity,0)},[product])

    return(

        <div style={{padding:"20px", background:"#cab6b6", 
        borderRadius:"10px",textAlign:"center",margin:"50px 250px"}}>

            <h1 style={{textAlign:"center", color:"#e04a4a", fontWeight:"bold"}}
            >SHOPPING CART</h1>
            
            <div>

            {product.map((item)=> (
                <CartItems key={item.id}
                         id={item.id}
                         name={item.name}
                         price={item.price}
                         quantity={item.Quantity}
                         increaseQty = {IncreaseQty}
                         onDelect={deleteProduct}
                         image={item.image}/>))}
            </div>

            <h2 style={{textAlign:"center",color:"darkgreen"}}>Total Price: {totalcost} </h2>

        </div>
    )
}

export default Cart;

