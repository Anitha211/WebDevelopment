import React, { useCallback, useState, useMemo } from "react";
import Product from "./Product";
import "./Cart.css"

function Cart(){

    let [product, setProduct] = useState ([

        {id:1, name:"Laptop", price: 55000},
        {id:2, name:"Phone", price: 20000},
        {id:3, name:"Tabs", price:45000}

    ]);

    let[count,setCount] = useState(0);

    console.log("Parent Rendered"); 
      
    // usecallBack
    let deleteProduct = useCallback((id)=>{
        console.log("Deleting:",id)
        setProduct(prev=>prev.filter(product => product.id !== id))
    },[]);

    // useMemo
    let totalPrice = useMemo(()=>{
        return product.reduce((sum, item)=> sum + item.price,0)},[product])
    
    return(

        <div className="Container">

            <h2 className="counter">Counter: {count}</h2>

            <button className="button" onClick={()=>setCount(count + 10)}>Increase</button>
            
            <h1 className="title">Shopping Cart</h1>
            <h3 className="totalprice">Total Price: {totalPrice} </h3>
            
            <div className="grid">

            {product.map((item)=> (
                <Product key={item.id}
                         id={item.id}
                         name={item.name}
                         price={item.price}
                         onDelect={deleteProduct}/>))}
            </div>

        </div>
    )

}

export default Cart;