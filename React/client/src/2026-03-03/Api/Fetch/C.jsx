import React, { useState } from "react";

function C() {

    let[user,setUsers] = useState("");

    let handlePut = () => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method:"PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: 1,
                name: "Put",
                email:"put.upadte@mail.put"
            }),
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error))
    };


    let handlePatch = () => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method:"PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                
                email:"pATCH.upadte@mail.patch"
            }),
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error))
    };

    return(

        <div>
          <h2>PUT & Patch</h2>
          <button onClick={handlePut}>PUT</button>
          <button onClick={handlePatch}>PATCH</button>
            <h3>ID: {user.id}</h3>
            <p>NAME: {user.name}</p>
            <p>EMAIL: {user.email}</p>
        </div>
    )
}

export default C