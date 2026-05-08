import React from "react";
import { useEffect } from "react";
import { useState } from "react";


function Users() {

    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                if (!response.ok) {
                    setError("Failed to fetch data");
                    setLoading(false);
                    return null;
                }
                return response.json
            })

            .then((data) => {
                if (!data) {
                    return;
                }

                if (data.length === 0) {
                    setError("No users found");
                } else {
                    setUsers(data);
                }
                setLoading(false)
            })

            .catch(() => {
                setError("Something went wrong");
                setLoading(false)
            })
    }, []);

    if (loading) {
        return <h2>Loading......</h2>

    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (

        <div>
            <h1>User List</h1>

            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>City: {user.address.city}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;




