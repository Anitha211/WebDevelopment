import React from "react";
import useFetch from "./useFetch";

function Users() {

    let { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error occurred</p>

    return (

        <div>
            <h1>User Details</h1>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>


        </div>
    )
}

export default Users;