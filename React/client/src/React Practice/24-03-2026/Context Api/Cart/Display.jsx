import React, { useContext, useState } from "react";
import { MyContext } from "./CreateContext";

function Display() {
    let {data,setData} = useContext(MyContext);

    let[name,setName] = useState("");
    
    let submitHandler = (e) => {
        e.preventDefault(); 
        let newItem ={brandname:name}
        setData([...data,newItem]);
        setName("");
        
    };
    
    return(
       <div>
           
            {data.map((item) => (
                <div key={item.id}>
                    <h3>{item.brandname}</h3>
            </div>
            
            ))}

            <form onSubmit={submitHandler}>

                <input 
                    type="text" 
                    placeholder="Enter new item" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>

                    
               <br/> <br/>
                <button type="submit"> ADD</button>
            </form>
        </div>
    )
}

export default Display;