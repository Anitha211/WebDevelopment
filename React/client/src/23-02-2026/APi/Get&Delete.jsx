import axios from "axios";
import React, { useState } from "react";

function A(){
    let [data, setData] = useState([]);


    // GET --> to fetch the data

    let fetchUsers = () => {

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log("Get data:",res.data);
            setData(res.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

   // Delete --> to delete the data

    let deleteUser = (id) => {
        axios.delete("https://jsonplaceholder.typicode.com/users/${id}")
        .then((res) => {
            console.log("Delete data:",res.data);
            let updateData = data.filter((user) => user.id !== id);
            setData(updateData);
        })
        .catch((error) => {
            console.log(error);
        });
    };

 
    return(
        <div>
            <h1>API -- Axios method</h1>
            <h1>GET & Delete Methods</h1>
            <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}}  onClick={fetchUsers}>Get Users</button>
           
            <div>
            {data.map((user) => {
                return (
                <div key={user.id} style=
                {{  border:"1px solid black",
                    margin:"10px", 
                    padding:"10px",
                    width:"900px",
                    textAlign:"center",
                    alignContent:"center"
                }}>
                    <h1>ID: {user.id}</h1>
                    <h2>User Name: {user.username}</h2>
                    <h3>Name: {user.name}</h3>
                    <h4>Email: {user.email}</h4>
                    
                    <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}}  onClick={() => deleteUser(user.id)}>Delete Users</button>
                    </div>
                    )
                })
                }
                </div>
    </div>
    )
}
export default A;


