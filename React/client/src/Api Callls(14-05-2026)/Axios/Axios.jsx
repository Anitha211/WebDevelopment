import React, { useEffect, useState } from "react";
import axios from "axios"
import "./Axios.css"

function Axios() {

    let [users, setUsers] = useState([]);

    let [name, setName] = useState("");

    let [editId, setEditId] = useState();

    // GET 
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((e) => console.log(e))

    }, []);

    // 

    let updatePost = () => {
        name &&
        axios.post("https://jsonplaceholder.typicode.com/users", {
            name: name,
        })
        .then((res) => {
            setUsers([...users, res.data]);
            setName("")
        })
        .catch((e) => {
            console.log(e);
            
        })

    }

    // 

    let updateUser = () => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${editId}`, {
            name: name,
        })
        .then((res) => {
            setUsers(
                users.map((user) => user.id === editId
                  ? res.data : user
            )
            );
            setName("");
            setEditId(null);
        })
        .catch((e) => {
            console.log(e);
        })
    };

    // 

    let editUser = (user) => {
        setName(user.name);
        setEditId(user.id)
    };

    // 

    let deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
            setUsers(users.filter((user) => user.id !== id))
        })
        .catch((e) => {
            console.log(e);
        })
    }

    return(

        <div className="Container">
             <h1>Api call by using axios</h1>

             <div className="form">

             <input type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
             />

             <button onClick={editId ? updateUser : updatePost}>
                {editId ? "Update" : "ADD"}
                </button>

             </div>

             <div className="Users">

              {users.map(user => (
                <div key={user.id} className="Card">
                    <h3>{user.id} </h3>
                    <h4>{user.name} </h4>
                    <p>{user.email} </p>

                    <button onClick={() => editUser(user)}>EDIT</button>
                    <button onClick={() => deleteUser(user.id)}>DELETE</button>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Axios;


