import React, { useEffect, useState } from "react";

function Api() {
    let [users, setUsers] = useState([]);
    let [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data);
            setLoading(false);
        })
    },[]);

    return(
        <div>
             {loading ?
                <p>Loading....</p>
                :
                users.map((user) => (
                    <p key={user.id}>
                        {user.name}
                    </p>
                ))
            }
        </div>
    )
}

export default Api;