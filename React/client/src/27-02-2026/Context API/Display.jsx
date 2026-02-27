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

    let deleteHandler = (id) => {
        let updateData = data.filter((item) => item.id !== id);
        setData(updateData)
    };

    
    return(
       <div>
           
            {data.map((item) => (
                <div key={item.id} 
                style={{backgroundColor:"white",margin:"10px 0",
                        padding:"0 30px",borderRadius:"8px",
                        display:"flex",justifyContent:"space-between",
                        alignItems:"center"}}>

                <h3>{item.brandname}</h3>
                

                <button onClick={()=>deleteHandler(item.id)}
                        style={{backgroundColor:"red",color:"white",padding:"8px 12px",
                               borderRadius:"5px",cursor:"pointer"}}> Delete </button>
            </div>
            
            ))}

            <form onSubmit={submitHandler} style={{marginTop:"15px"}}>

                <input 
                    type="text" 
                    placeholder="Enter new item" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}

                    style={{padding:"8px",borderRadius:"5px",marginRight:"5px",
                            border:"1px solid #ccc",width:"50%"}}
                />

                    
               <br/> <br/>
                <button 
                    type="submit" 
                    style={{padding:"8px 12px", borderRadius:"5px",
                            backgroundColor:"green",color:"white",
                            cursor:"pointer",marginLeft:"5px"}}> ADD</button>
                
            </form>
        </div>
    )
}

export default Display;