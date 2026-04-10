import React, { useState } from "react";

import Count from "./Count";

import { MyContext } from "./CreateContext";
import "./style.css"

function Context() {

    let[data,setData] = useState([
        {id:1, brandname: "Nokia"},
        {id:2, brandname: "Realme"},
        {id:3, brandname: "Mi"}
    ]);

    let deleteItem = (id) => {
        setData(prev => prev.filter(item => item.id !== id))
    }
    
    return(
        <MyContext.Provider value={{data,setData, deleteItem}}>
            <div>

           <h1>Cart Items</h1>
           <Count/>

           </div>
        </MyContext.Provider>
    )
}

export default Context;






