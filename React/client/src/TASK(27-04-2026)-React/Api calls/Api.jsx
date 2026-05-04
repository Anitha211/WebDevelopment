import React, { useState } from "react";
import axios from "axios";


function Api() {

    let [user, setUser] = useState([]);

    let fetchUsers = () => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log("Get data:", res.data);
                setUser(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Post

    let addUser = () => {

        axios.post("https://jsonplaceholder.typicode.com/users", {
            name: "John",
            username: "John123",
            email: "john1w2w@gmail.com"
        })

            .then((res) => {
                console.log("User Added:", res.data);
                setUser([...user,
                res.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // put

    let updatePut = () => {
        axios.put("https://jsonplaceholder.typicode.com/users/1", {
            name: "Update Put",
            username: "Update123",
            email: "Update@gmail.com"
        })
            .then((res) => {
                console.log("Update put User:", res.data);
                setUser([res.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Patch

    let updatePatch = () => {
        axios.patch("https://jsonplaceholder.typicode.com/users/1", {
            name: "patch updated name",
        })
            .then((res) => {
                console.log("Update Patch User:", res.data);
                setUser([res.data])
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Delete

    let deleteUser = (id) => {
        axios.delete("https://jsonplaceholder.typicode.com/users/${id}")
            .then(() => {
                setUser(user.filter((user) => user.id !== id));
            })
            .catch((error) => console.log(error));
    };


    return (

        <div>

             <h1>Api Calls using Axios</h1>


            <button onClick={fetchUsers}>Get Users</button>
            <button onClick={addUser}>Post Users</button>
            <button onClick={updatePut}>Put</button>
            <button onClick={updatePatch}>Patch</button>

            <div>
                {user.map((user) => {
                    return (
                        <div key={user.id} >
                            <h1>ID: {user.id}</h1>
                            <h2>User Name: {user.username}</h2>
                            <h3>Name: {user.name}</h3>
                            <h4>Email: {user.email}</h4>

                            <button onClick={() =>deleteUser(user.id)}>Delete</button>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Api;


