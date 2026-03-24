import React, { useContext } from "react";
import { MyContext } from "./CreateContext";

function Count() {
    
    let {data} =useContext(MyContext)

    return(
        
         
        <div>
            <h3>Total Brands:  {data.length}</h3>
        </div>
    )
}

export default Count;

