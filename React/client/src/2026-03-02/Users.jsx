import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import UserList from "./UserList";

function Users(){

    let [users, setusers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setusers(res.data))
        .catch(err => console.log(err));
    },[]);

   let handleDelete = useCallback((id) => {
    setusers(prev => prev.filter(user => user.id !== id))
   },[]);

   let totalUsers = useMemo(() => {
    return users.length;
   }, [users]);    

    return(
    
        <div style={{ textAlign:"center",margin:"20px auto",padding:"20px",backgroundColor:"lightcyan",borderRadius:"10px" }}>

            <h1 style={{textAlign:"center"}}>User List</h1>

            <h2 style={{color:"blue",textAlign:"center"}}>Total Users: {totalUsers}</h2>
            
            <UserList users={users} 
                      handleDelete={handleDelete}/>
                    
        </div>
    )
}
export default  Users;