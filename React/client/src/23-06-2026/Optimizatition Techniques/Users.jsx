import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import UsersList from "./UsersList";

function Users() {

    let [users, setusers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setusers(res.data))
            .catch(err => console.log(err));
    }, []);

    let handleDelete = useCallback((id) => {
        setusers(prev => prev.filter(user => user.id !== id))
    }, []);

    let totalUsers = useMemo(() => {
        return users.length;
    }, [users]);

    return (

        <div>

            <h1>User List</h1>

            <h2>TotalUsers: {totalUsers} </h2>

            <UsersList users={users}
                handleDelete={handleDelete} />

        </div>
    )
}

export default Users;


