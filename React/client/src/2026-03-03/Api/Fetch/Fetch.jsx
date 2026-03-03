import React, { useState } from "react";

function Fetch() {

    let [users, setUsers] = useState([]);
    let [message, setMessage] = useState("")

    let fetchUsers = () => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setMessage("Fetched Successfully")
            })
            .catch((error) => { console.log(error); });
    };

    // Post

    let handleAdd = () => {
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
                setMessage("Post New User")
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
                setMessage("Updated entier data")
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
                setMessage("User partially updated")
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
                setMessage("USer Deleted")

            })
            .catch((err) => console.log(err))
    };
    return (

        <div style={{ textAlign: "center", margin: "30px", backgroundColor: "lightgreen", borderRadius: "30px" }}>
            <h1 style={{ color: "red", padding: "20px" }}>Api call by using fetch</h1>

            <div >
                <button onClick={fetchUsers}>GET</button>
                <button onClick={handleAdd}> POST</button>
                <button onClick={handlePut}>PUT</button>
                <button onClick={handlePatch}>PATCH</button>
                {/* <button onClick={handleDelete}>DELETE</button> */}
            </div>

            <h2><u>{message}</u></h2>

            <div style={{
                display: "flex", flexDirection: "column", alignItems: "center",
                backgroundColor: "lightseagreen"
            }}>

                {users.map((user) => (

                    <div key={user.id}
                        style={{
                            border: "5px solid red", margin: "10px", padding: "10px",
                            width: "700px", borderRadius: "15px", backgroundColor: "white"
                        }}>

                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>

                        <button onClick={() => handleDelete(user.id)}>DELETE</button>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Fetch;