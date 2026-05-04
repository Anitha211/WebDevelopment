import React, { useEffect, useState } from "react";

function A() {

    let [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);

            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    return (

        <div>
            
            <h3>User List</h3>

            <div>
                {user.map((item) => (
                    <p key={item.id}>
                        {item.name} - {item.email}
                    </p>
                ))}
            </div>

        </div>
    )
}

export default A;





