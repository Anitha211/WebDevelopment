import React, { useContext } from "react";
import { MyContext } from "./CreateContext";

function Count() {
    
    let {data} =useContext(MyContext)

    return(
        
         
        <div style={{backgroundColor:"#007bff",color:"white",
                     padding:"8px",borderRadius:"6px",marginBottom:"15px",fontWeight:"bold"}}>
            <h3>Total Brands:  {data.length}</h3>
        </div>
    )
}

export default Count;

