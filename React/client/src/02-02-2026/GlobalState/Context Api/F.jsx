import React, { useContext } from "react"
import { Context } from "./A";


function F(){
    let {user, UpdateUser} = useContext(Context);
    console.log(user);
    
    
    return(
        <div>
            <h3>F</h3> 
            <p>Data from A1 Component - {user.user}</p>
            <p>Name: {user.name}</p>
            <p>ID: {user.id}</p>
            <p>City: {user.city}</p>
            <p>Company: {user.company}</p>
            
            <button onClick={UpdateUser}>Update Data</button>
        </div>
    )
}

export default F;