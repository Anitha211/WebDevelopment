import React, { useState } from "react";

import Count from "./Count";
import Display from "./Display";

import { MyContext } from "./CreateContext";

function A() {

    let[data,setData] = useState([
        {id:1, brandname: "Nokia"},
        {id:2, brandname: "Realme"},
        {id:3, brandname: "Mi"}
    ])
     
    return(
        <MyContext.Provider value={{data,setData}}>
            <div style={{width:"400px",margin:"40px auto",padding:"25px",backgroundColor:"lightgray",borderRadius:"10px",
                         textAlign:"center"
            }}>
                <h1>Cart Items</h1>
           <Count/>
           <Display/>
           </div>
        </MyContext.Provider>
    )
}

export default A;