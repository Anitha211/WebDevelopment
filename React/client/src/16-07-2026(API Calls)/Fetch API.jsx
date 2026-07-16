import React, { useState } from "react";

function FetchAPI() {

    let [users, setUsers] = useState([]);

    let [loading, setLoading] = useState(false);

    let [message, setMessage] = useState("");

    let getUsers = () => {
        setLoading(true);
        setMessage("");

        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users")

                .then((res) => res.json())
                .then((data) => {
                    setUsers(data);
                    setLoading(false);
                    setMessage("Fetched users successfully");
                })
                .catch(() => {
                    setLoading(false)
                    setMessage("Failed to fetch the data")
                })

        }, 2000);
    };

    // POST

    let addUser = () => {
        setLoading(true)
        setMessage("");

        fetch("https://jsonplaceholder.typicode.com/users", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "New name",
                email: "Usermail123@gmail",
            }),
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers((prevUsers) => [...prevUsers, data]);
                setLoading(false);
                setMessage("Posted user successfully");
            })
            .catch(() => {
                setMessage("Failed to postUser")
            });
    };

    // put

    let updateUser = () => {
        setMessage("");
        setLoading(true);

        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Update Name",
                email: "update@gmail.com"
            }),
        })

            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUsers((prevUsers) => prevUsers.map((user) =>
                    user.id === data.id ? data : user));

                setMessage("User updated successfully")
            })
            .catch(() => {
                setMessage("Failed to update user");
            });
    };

    // patch

    let patchUser = () => {

        setMessage("")

        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "patch@yahoo.com"
            }),
        })

            .then((res) => res.json())

            .then((data) => {
                console.log(data);

                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user.id === data.id
                            ? { ...user, email: data.email } : user
                    )
                );

                setMessage("User Patched Successfully");

            })

            .catch(() => {
                setMessage("Failed to patch user");
            });

    };

    // DELETE

    let deleteUser = () => {
        setMessage("");

        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "DELETE",
        })

        .then(() => {
            setUsers((prevUsers) => 
            prevUsers.filter((user) => user.id !== 1)
        );

        setMessage("User deleted successfully");
        })
        .catch(() => {
            setMessage("Failed to delete user");
        });
    };

    return (

        <div>

            <h1>User List</h1>

            <button onClick={getUsers}> Get Users list</button>
            <button onClick={addUser}>Add User</button>
            <button onClick={updateUser}>Update User</button>
            <button onClick={patchUser}>Patch User</button>

            <h3>{message}</h3>

            {loading ? <h2>Loading...</h2>
                : users.map((user) => (
                    <div key={user.id}>

                        <h3><b>ID: </b>{user.id}</h3>
                        <h3><b>Name: </b>{user.name}</h3>
                        <h3><b>Email: </b> {user.email}</h3>

                        <button onClick={() => deleteUser(user.id)}>Delete</button>

                    </div>
                ))
            }

        </div>
    )
}

export default FetchAPI;


