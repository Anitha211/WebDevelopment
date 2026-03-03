import React, { useEffect, useState } from "react";

function A() {
    let[user,setUsers] = useState([]);
 
    useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err)
            )
    },[])
    

    return(

        <div>
            <h2>Api call by using fetch(Get)</h2>
            {user.map((user) => (
                <p key={user.id}>
                    {user.name} ------
                    {user.address.city}
                </p>
            ))}

        </div>
    )
}

export default A;