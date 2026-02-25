import React, { useEffect, useState } from "react";
import axios from "axios";

function A() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
         axios.get("https://jsonplaceholder.typicode.com/users")
         .then((res) => {
            console.log(res.data);
            setUsers(res.data)})
         .catch((error) => {
            console.log(error);});
    }, []);
    return(
        <div>
            <h2>User Details</h2>
            <div>
                {users.map((user) => (
                    <div key={user.id} >
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Phone:</b> {user.phone}</p> 

                    </div>   
                ))}
            </div>
        </div>
    )
}
export default A;