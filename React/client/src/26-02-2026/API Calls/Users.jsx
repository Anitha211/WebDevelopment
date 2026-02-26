import React, { useState } from "react";
import axios from "axios";
import "./User.css"

function Users(){

    let[users,setUsers] = useState([]);
    let[message,setMessage] = useState("");

    let fetchUsers = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                setMessage("Users Fetched successfully")
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    let addUsers = () => {
        let newUser = {
            name: "Robin",
            username:"abcd",
            email: "robin23WW@gmail.com",
            company: "Infotech"
        };
        axios.post("https://jsonplaceholder.typicode.com/users",newUser) 

        .then((res) => {
            console.log("User Added:", res.data);
            setUsers([...users,res.data]);
            setMessage("New User added successfully")
        })
        .catch((error) => {
            console.log(error);
        });
    };



    let UpdatewithPut = (id) => {
        let updateUser = {
            name: "PUT",
            username:"update put"
        };
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateUser) 

        .then((res) => {
            console.log(res.data);
            setUsers(users.map((user)=>(user.id == id ? res.data : user)));
            setMessage("User updated with Put")
        })
        .catch((error) => {
            console.log(error);
        });
    };

    let UpdatewithPatch = (id) => {
        let patchData = {
            email:"patch@gmail.com",
        };
        axios.patch(`https://jsonplaceholder.typicode.com/users/${id}`,patchData) 

        .then((res) => {
            console.log(res.data);
            setUsers(users.map((user)=>(user.id == id ? {...user,...patchData} : user)));
            setMessage("User updated with Patch")
        })
        .catch((error) => {
            console.log(error);
        });
    };

    let deleteUser = (id) => {
        axios.delete("https://jsonplaceholder.typicode.com/users/${id}")
        .then((res) => {
            console.log(res.data);
            let updateData = users.filter((user) => user.id !== id);
            setUsers(updateData);
            setMessage("User Deleted Successfully")
        })
        .catch((error) => {
            console.log(error);
        });
    };

return(
    <div className="CONTAINER">

        <h1 className="TITLE">API Calls</h1>

        <div className="TOP-BTN">
            <button className="BTN" onClick={fetchUsers}>Fetch</button>
            <button className="BTN" onClick={addUsers}>POST</button>
        </div>

        <h3 className="MSG">{message}</h3>
         
         <div className="CARD-CONTAINER">
        {users.map((user) => {
            return (
                <div key={user.id} className="CARD">
                        <h3>{user.name}</h3>
                        <p>{user.username}</p>
                        <p>{user.email}</p>
                        <p>{user.id}</p>
                    <div className="CARD-BTN">
                        <button className="BTN" onClick={()=>UpdatewithPut(user.id)}>PUT</button>
                        <button className="BTN" onClick={()=>UpdatewithPatch(user.id)}>PATCH</button>
                        <button className="BTN" onClick={()=>deleteUser(user.id)}>DELETE</button>
                    </div>
                </div>
                )
            })}

        </div>
        </div>
    )
}

export default Users;