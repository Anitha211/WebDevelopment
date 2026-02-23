import axios from "axios";
import React, { useState } from "react";

function Put(){

    let [data, setData] = useState([]);
    
     let updatePut = () => {
        axios.put("https://jsonplaceholder.typicode.com/users/1", {
            name: "Update Put",
            username: "Update123",
            email:"Update@gmail.com"
        })
        .then((res) => {
            console.log("Update put User:", res.data);
            setData([res.data]);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    let updatePatch = () => {
        axios.patch("https://jsonplaceholder.typicode.com/users/1", {
            name: "patch updated name",
            })
        .then((res) => {
            console.log("Update Patch User:", res.data);
            setData([res.data])
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return(
        <div>

            <h1>Put & Patch Methods</h1>

            <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}} onClick={updatePut}>Put User</button>
            <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}} onClick={updatePatch}>Patch User</button>

             {data.map((user) => (
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
                </div>
            ))}

        </div>
    )
}

export default Put;