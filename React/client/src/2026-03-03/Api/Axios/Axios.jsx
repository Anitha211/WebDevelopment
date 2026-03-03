import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Axios.css"

function Axios() {

    let [users, setUsers] = useState([]);

    let [name, setName] = useState("");

    let [email, setEmail] = useState("");

    let [id, setId] = useState(null);

    // GET 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((e) => console.log(e))

    }, []);

    // POST

    let handleAdd = () => {
        axios.post("https://jsonplaceholder.typicode.com/users", {
            name: name,
            email: email
        })
            .then((res) => {
                setUsers([...users, res.data])
                setName("")
                setEmail("")
            })
            .catch((e) => {
                console.log(e);
            })
    }

    // PUT

    let handlePut = () => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, 
            { 
                name:name, 
                email:email 
            })
            .then((res) => {
                setUsers(users.map((user) =>
                    user.id == id ? res.data : user
                ))
                setId(null);
                setName("");
                setEmail("")
            })
            .catch((err) => console.log(err))
    }

    // PATCH

    let handlePatch = (userId) => {
        axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`, 
            { 
                name: "Updated name ,,,, "
            })
            .then((res) => {
                setUsers(users.map((user) =>
                    user.id == userId ? { ...user, ...res.data } : user
                ));
            })
            .catch((e) => console.log(e)
            )
        }

    // DELETE

    let handleDelete = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
            console.log("Delete data:",res.data);
            let updateData = users.filter((user) => user.id !== id);
            setUsers(updateData);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    let handleEdit = (user) => {
        setId(user.id)
        setName(user.name)
        setEmail(user.email)
    };
    return (
        <div className="Acontainer">
            
            <h1>Api call by using axios</h1>
            
            <div className="form">
            <input type="text" placeholder="Enter name" value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginRight: "5px" }} />

            <input type="email" placeholder="email" value={email}
                onChange={(e) => setEmail(e.target.value)} 
                style={{ marginRight: "5px" }}/>
                
            {id ? <button onClick={handlePut} className="put-btn"> PUT</button> : 
            
                <button onClick={handleAdd} className="add-btn"> ADD</button>}

            </div>

            <div className="grid">
            {users.map(user => (

                <div key={user.id} className="Card">

                    <p>{user.id} </p>
                    <p>{user.name} </p>
                    <p>{user.email} </p>

                    <button onClick={() => handleEdit(user)} className="edit-btn">EDIT</button>

                    <button onClick={() => handlePatch(user.id)} className="patch-btn">PATCH</button>

                    <button onClick={() => handleDelete(user.id)} className="delete-btn">DELETE</button>

                </div>

            ))}

            </div>

        </div>
    )
}

export default Axios;