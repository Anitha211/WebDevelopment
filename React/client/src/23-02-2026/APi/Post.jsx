import axios from "axios";
import React from "react";
import { useState } from "react";

function Post(){

    let [data, setData] = useState([]);

     let addUser = () => {

        axios.post("https://jsonplaceholder.typicode.com/users", { 
            name: "John",
            username: "John123",
            email:"john1w2w@gmail.com"})

        .then((res) => {
            console.log("User Added:", res.data);
            setData([...data,
                res.data]);
        })

        .catch((error) => {
            console.log(error);
        });
    };

    return(
        <div>

            <h1>Post Method</h1>

            <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}} onClick={addUser}>Add User</button>

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

export default Post;