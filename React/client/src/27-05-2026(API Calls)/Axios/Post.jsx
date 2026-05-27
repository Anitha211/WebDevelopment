import React, { useState } from "react";

import axios from "axios";

function B() {

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

            <button onClick={addUser}> Add User </button>

            {data.map((user) => (
                <div key={user.id}>
                    <h1>ID: {user.id}</h1>
                    <h2>User Name: {user.username}</h2>
                    <h3>Name: {user.name}</h3>
                    <h4>Email: {user.email}</h4>
                </div>
            ))}

        </div>
    )
}

export default B;




