import React, { useState} from "react";

function Fetch() {

    let [user, setUsers] = useState([]);
    let [message, setMessage] = useState("")
    
        let fetchUsers = () => {
    
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => {
                    setUsers(data);
                    setMessage("Fetched Successfully")
                })
                .catch((error) => { console.log(error); });
        };

        // post

        let Add = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "newUser",
                email: "Newuser12121@gmail.com"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers([...user, data]);
                setMessage("Post New User")
            })
            .catch((error) => console.log(error))
    };

    // Put 

    let Put = () => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: 1,
                name: "updated",
                email: "put.upadte@mail.put"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(user.map((user) => user.id == 1 ? data : user));
                setMessage("Updated entier data")
            })
            .catch((error) => console.log(error))
    };

    // Patch

    let Patch = () => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({

                email: "anitha123.upadte@mail.patch"
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setUsers(user.map((user) => user.id == 1 ?
                    { ...user, ...data } : user));
                setMessage("User partially updated")
            })
            .catch((error) => console.log(error))
    };

    // Delete

    let Delete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => {
                setUsers(user.filter((user) => user.id !== id));
                setMessage("USer Deleted")

            })
            .catch((err) => console.log(err))
    };

    return(
        <div>
            <h1>Api call by using fetch</h1>

            <p><u>{message}</u></p>

            <button onClick={fetchUsers}>Fetch data</button>
            <button onClick={Add}>Post</button>
            <button onClick={Put}>Put</button>
            <button onClick={Patch}>Patch</button>

            <div style={{textAlign:"center"}}>
            {user.map((user) => (
                <div key={user.id}
                style={{ margin: "10px", padding: "10px",width: "700px", 
                    borderRadius: "15px", backgroundColor: "white"}}>
                    <h2>{user.id}</h2>
                    <h3>{user.name}</h3>
                    <h3>{user.username}</h3>
                    <p>{user.address.city}</p>
                    <button onClick={() => Delete(user.id)}>Delete</button>
                </div>
            ))}
            
            </div>

        </div>
    )
}

export default Fetch;







