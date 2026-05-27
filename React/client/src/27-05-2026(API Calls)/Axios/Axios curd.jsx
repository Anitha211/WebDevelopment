import React, { useEffect, useState } from "react";

import axios from "axios";

function C() {

    let [users, setUser] = useState([]);
    let [name, setName] = useState("");
    let [editId, setEditId] = useState(null);

    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            setUser(res.data);
        })
        .catch((err) => console.log(err))
    },[]);

    // Add user

    let addUser = async() => {

        if(name === "") return;

        let responce = await axios.post("https://jsonplaceholder.typicode.com/users",
            {
                name: name,
            }
        );

        setUser([...users, responce.data]);

        setName("")
    };

    // Delete User

    let deleteUser = async(id) => {

        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

        let filterUser = users.filter((user) => user.id !== id);

        setUser(filterUser);
    };

    // Edit user

    let editUser = (user) => {
        setName(user.name);

        setEditId(user.id);
    };

    // Update user

    let updateUser = async() => {

        let response = await axios.put("https://jsonplaceholder.typicode.com/users/1",
            {
                id: editId,
                name: name,
            }
        );

        let updatedUsers = users.map((user) => 
            user.id === editId ? response.data : user
        );

        setUser(updatedUsers);

        setName("");

        setEditId(null)
    };

    return(

        <div style={{alignItems:"center",textAlign:"center",background:"white",
            border:"2px solid blue",padding:"20px",borderRadius:"30px"
        }}>

            <h1>React CURD with Axios</h1>

            <input type="text"
                   placeholder="Enter Name"
                   value={name} 
                   onChange={(e) => setName(e.target.value)}
            />

            { editId ? 
             
             <button onClick={updateUser}>Update User</button> 
             
             : 
             
             <button onClick={addUser}>Add User</button>}

            <hr/>

            {
                users.map((user) => (
                    <div key={user.id} 
                      style={{border:"1px solid gray", borderRadius:"20px",background:"pink",
                        padding:"10px", marginBottom:"10px",margin:"20px"}}
                    >

                        <h3>{user.name}</h3>
                        <h4>{user.username}</h4>
                        <p>{user.email}</p>

                        <button onClick={() => editUser(user)}>Edit</button>

                        <button onClick={() => deleteUser(user.id)}
                             style={{marginLeft:"10px"}}
                            >Delete</button>

                    </div>
                ))
            }


        </div>

    )
    
}

export default C;


