import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Axios.css"


function Api() {

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

    // Post ==> send data

    let addUser = () => {

        axios.post("https://jsonplaceholder.typicode.com/users", {
            name: "John",
            username: "John123",
            email: "john1w2w@gmail.com"
        })

            .then((res) => {
                console.log("User Added:", res.data);
                setData([...data,
                res.data]);
            })

            .catch((error) => {
                console.log(error);
            });
    };

    // Put -> to update the data

    let updateUser = () => {
        axios.put("https://jsonplaceholder.typicode.com/users/1", {
            name: "Udated put",
            username: "put"
        })
        .then((res) => {
            console.log("Update put User:", res.data);
            setData([res.data]);
        })
        .catch((e) => {
            console.log(e);
        })
    }

    // Patch - to update specific data 

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

    // delete

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


    return (
        <div className="container">
            <h1>API -- Axios method</h1>
            <button onClick={fetchUsers}>Get Users</button>
            <button onClick={addUser}>Add User</button>
            

            <div>
                {data.map((user) => {
                    return (
                        <div key={user.id}>
                            <h1>ID: {user.id}</h1>
                            <h2>User Name: {user.username}</h2>
                            <h3>Name: {user.name}</h3>
                            <h4>Email: {user.email}</h4>

                            <button onClick={() => updateUser(user.id)}>Put user</button>
                            <button onClick={() => updatePatch(user.id)}>Patch</button>
                            <button onClick={() => deleteUser(user.id)}>Delete</button>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Api;








