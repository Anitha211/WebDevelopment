import React, { useEffect, useState } from "react";
import axios from "axios";

function Get() {

    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");

    let fetchUser = async () => {
        setLoading(true);
        setError("");

        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data)
        } catch (err) {
            setError("Failed to fetch data")
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    },[])


    return (

        <div>

            <h2>User List</h2>

            {loading ? <p>Loading......</p> : <p>Data Loaded</p>}

            {error && <p>{error}</p>}

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Get;