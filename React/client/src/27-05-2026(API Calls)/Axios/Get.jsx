import React, { useState } from "react";
import axios from "axios";

function A() {

    let [data, setData] = useState([]);

    // GET --> to fetch the data

    let fetchUsers = () => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log("Get data:", res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <div>

            <h1>API - Axios method</h1>

            <h2>GET Method</h2>

            <button onClick={fetchUsers}>Get Users</button>

            <div>
                {data.map((user) => {
                    return (
                        <div key={user.id}>
                            <h1>ID: {user.id}</h1>
                            <h2>User Name: {user.username}</h2>
                            <h3>Name: {user.name}</h3>
                            <h4>Email: {user.email}</h4>
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default A;


