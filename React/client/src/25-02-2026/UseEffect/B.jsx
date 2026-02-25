import React, { useEffect, useState } from "react";
import axios from "axios"

function B(){
    let[user, setUser] = useState([]);

    useEffect(() =>{

        axios.post("https://jsonplaceholder.typicode.com/users", {
            name: "Anitha",
            email:"anitha@gmail.com",
            phone:"1234567890"
        })
        .then((res) => {
            setUser([res.data]);
        })
        .catch((error) => console.log(error))
    },[])

    return(
        <div>
            <h1>POST USER</h1>
            <div>
                {user.map((user) => (
                    <div key={user.id} >
                        <p><b>ID:</b> {user.id}</p>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>Email:</b> {user.email}</p>
                        <p><b>Phone:</b> {user.phone}</p>

                    </div>
                ))}
            </div>
          
        </div>
    )
}

export default B;