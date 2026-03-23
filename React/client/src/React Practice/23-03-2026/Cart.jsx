import React, { useCallback, useMemo, useState } from "react";
import C from "./C"

function Cart(){

    let [product, setProduct] = useState ([

        {id:1, name:"Laptop", price: 55000, Quantity: 1},
        {id:2, name:"Phone", price: 20000, Quantity: 1},
        {id:3, name:"Tabs", price:45000, Quantity: 1},
        {id:4, name:"Headphones", price:3000, Quantity: 1},
        {id:5, name:"Keyboard", price:5000, Quantity: 1}
    ]);

    let[count,setCount] = useState(0);

    console.log("Parent Rendered"); 
    
    // usecallBack

    let IncreaseQty = useCallback((id) => {
        setProduct((prev) => prev.map((item) => 
              item.id == id ? {...item, Quantity: item.Quantity + 1 } : item)
    );
    },[]);
    
    let deleteProduct = useCallback((id)=>{
        console.log("Deleting:",id)
        setProduct(prev=>prev.filter(product => product.id !== id))
    },[]);

    // useMemo
    let totalPrice = useMemo(()=>{
        console.log("Calculating total..");
        
        return product.reduce((sum, item)=> sum + item.price * item.Quantity,0)},[product])
    
    return(

        <div style={{padding:"20px", fontFamily:"ui-sans-serif", alignItems:"center",border:"5px solid Blue", borderRadius:"20px"}}>
            
            <h2>Counter: {count}</h2>

            <button onClick={()=>setCount(count + 10)}
                    style={{padding:"8px 12px", backgroundColor:"blue", color:"white", borderRadius:"4PX", cursor:"pointer"}}
                >Increase Count</button>
                <hr></hr>
            
            <div style={{textAlign:"center"}}>
            <h1>Shopping Cart</h1>
            <h3 style={{color:"green"}}>Total Price: {totalPrice} </h3>
            
            <div>

            {product.map((item)=> (
                <C key={item.id}
                         id={item.id}
                         name={item.name}
                         price={item.price}
                         Quantity={item.Quantity}
                         increaseQty = {IncreaseQty}
                         onDelect={deleteProduct}/>))}
            </div>

        </div>
        </div>
    )

}

export default Cart;