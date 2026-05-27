import React, { useState } from "react";

import "./FetchCurd.css"


function Fetch() {

    let [users, setUsers] = useState([]);
    
    let [message, setMessage] = useState("");

    let [loading, setLoading] = useState(false);

    let [error, setError] = useState("");

    let fetchUsers = () => {

        setLoading(true);
        setError("");

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setMessage("Fetched Successfully");
                setLoading(false);
            })
            .catch((error) => { 
                console.log(error)
                setError("Failed to fetch users");
                setLoading(false)
            })
    };

    // Post

    let handleAdd = () => {

         setLoading(true);
        setError("");

        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "newUser",
                email: "Newuser12121@gmail.com"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers([...users, data]);
                setMessage("Posted New User");
                setLoading(false)
            })
            .catch((error) => { 
                console.log(error) 
                setError("Failed to add users");
                setLoading(false)
            })
    };

    // Put 

    let handlePut = () => {

        setLoading(true);
        setError("");

        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: 1,
                name: "Put",
                email: "put.upadte@mail.put"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(users.map((user) => user.id == 1 ? data : user));
                setMessage("Updated entier data");
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setError("Failed to update user");
                setLoading(false)
            
            })
    };

    // Patch

    let handlePatch = () => {

         setLoading(true);
        setError("");

        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                email: "patch.upadte@mail.patch"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(users.map((user) => user.id == 1 ?
                    { ...user, ...data } : user));
                setMessage("User partially updated");
                setLoading(false)
            })
            .catch((error) => { 
                console.log(error) 
                setError("Failed to patch data");
                setLoading(false)
            })
    };

    // Delete

    let handleDelete = (id) => {

         setLoading(true);
        setError("");
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => {
                setUsers(users.filter((user) => user.id !== id));
                setMessage("USer Deleted");
                setLoading(false)

            })
            .catch((err) => {
                console.log(err) 
                setError("Failed to delete user");
                setLoading(false)
            })
    };
    return (

        <div className="container">

            <h1>Api call by using fetch</h1>

            <div className="buttons">
                <button onClick={fetchUsers}> GET </button>
                <button onClick={handleAdd}> POST </button>
                <button onClick={handlePut}> PUT </button>
                <button onClick={handlePatch}> PATCH </button>

            </div>

            {/* loading */}

            {loading && <h2 className="loading">Loading....</h2>}

            {/* message */}

           {message && <h2 className="message">{message}</h2>}

             {/* error */}

            {error && <h2 className="error">{error}</h2>}

            <div>

                {users.map((user) => (
                    
                    <div key={user.id} className="user-card">

                <p>ID: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>

                <button onClick={() => handleDelete(user.id)} 
                
                className="delete-btn">DELETE</button>

            </div>
            ))}

            </div>
        </div>
    )
}

export default Fetch;


