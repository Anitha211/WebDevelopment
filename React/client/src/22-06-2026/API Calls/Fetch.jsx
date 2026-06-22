import React, { useState } from "react";

function Fetch() {

    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");
    let [message, setMessage] = useState("");

    let fetchUser = () => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
                setLoading(false)
                setMessage("Fetched Successfully")
            })
            .catch(() => {
                setError("Failed to fetch data");
                setLoading(false)
            })
    };

    // 

    // Post

    let handleAdd = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "newUser",
                email: "Newuser12121@gmail.com"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers([...users, data]);
                setMessage("Post New User");
                setLoading(false)
            })
            .catch((error) => console.log(error))
            
    };

    // Put 

    let handlePut = () => {
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
                setLoading(false)
            })
            .catch((error) => console.log(error))
    };

    // Patch

    let handlePatch = () => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                email: "pATCH.upadte@mail.patch"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(users.map((user) => user.id == 1 ?
                    { ...user, ...data } : user));
                setMessage("User partially updated");
                setLoading(false)
            })
            .catch((error) => console.log(error))
    };

    // Delete

    let handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => {
                setUsers(users.filter((user) => user.id !== id));
                setMessage("USer Deleted");
                setLoading(false)

            })
            .catch((err) => console.log(err))
    };

    return (

        <div>

            <h1>API Call using Fetch</h1>
            
            <h2>User Lists</h2>

            <button onClick={fetchUser}> Get Data </button>
            <button onClick={handleAdd}> POST</button>
            <button onClick={handlePut}>PUT</button>
            <button onClick={handlePatch}>PATCH</button>

            {loading && <h3>Loading...</h3>}

            {error && <h3>{error}</h3>}

            <h2><u>{message}</u></h2>

            {!loading && users.map((user) => (
                <div key={user.id}>
                    <h3>{user.id}</h3>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>

                    <button onClick={() => handleDelete(user.id)}>DELETE</button>
                </div>
            ))}

        </div>
    )
}

export default Fetch;


