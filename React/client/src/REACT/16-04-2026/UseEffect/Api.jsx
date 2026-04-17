import React, { useEffect, useState } from "react";

function Api() {

    let[users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))

    },[])

    return(

        <div>
            <h3><u>Users Details</u></h3>
            <div>
                {users.map(user => (
                    <ul key={user.id}>
                        <li>Name: {user.name},</li>
                        Username: {user.username} 
                        <br></br>
                        <br></br>
                    </ul>
                ))}
            </div>

        </div>
    )
}

export default Api;





