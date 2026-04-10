import React, { useContext, useState } from "react";
import { MyContext } from "./CreateContext";
import "./style.css";

function Count() {
    
    let {data, setData, deleteItem } =useContext(MyContext)

    let [name, setName] = useState("");
    
        let submitHandler = (e) => {
            e.preventDefault();
            let newItem = { brandname: name }
            setData([...data, newItem]);
            setName("");
    
        };

    return(
    <div className="container">

        <h3>Total Brands:  {data.length}</h3>

       
             {data.map((item) => (
                <div key={item.id} className="item">
                    <h3>{item.brandname}</h3>
                    <button onClick={() => deleteItem(item.id)} style={{background:"red"}}>Delete</button>
                </div>

            ))}


             <form onSubmit={submitHandler}>

                <input
                    type="text"
                    placeholder="Enter new item"
                    value={name}
                    onChange={(e) => setName(e.target.value)} />


                <br /> <br />
                <button type="submit"> ADD</button>
            </form>


    </div>
    )
}

export default Count;

