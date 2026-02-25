import React, { useState } from "react";
import axios from "axios";

function C() {

    let [users, setUsers] = useState([]);
    let [name, setName] = useState("");
    let [email, setEmail] = useState("")

    let getUsers = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    let addUser = () => {
        let newUser = {
            name: name,
            email: email,
        };
        axios.post("https://jsonplaceholder.typicode.com/users", newUser)
            .then((res) => {
                setUsers([...users, res.data]);
                console.log(res.data);
                setName("");
                setEmail("")
            });
    };

    let updatePut = () => {
        axios.put("https://jsonplaceholder.typicode.com/users/1", {
            name: "Update Put",
            username: "Update12334522",
            email: "put@gmail.com"
        })
            .then((res) => {
                setUsers([res.data]);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    let updatePatch = () => {
        axios.patch("https://jsonplaceholder.typicode.com/users/1", {
            name: "patch updated name",
        })
            .then((res) => {

                setUsers([res.data])
                console.log(res.data);

            })
            .catch((error) => {
                console.log(error);
            });
    };


    let deleteUser = () => {
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
            .then(() => {
                setUsers([]);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial",alignItems:"center" }}>

            <h2 style={{ textAlign: "center" }}>User Details</h2>

            <div style={{ textAlign: "center" }}>

                <button style={{ border: "1px solid blue", margin: "10px", padding: "10px", textAlign: "center", borderRadius: "8px", backgroundColor: "white" }}
                    onClick={getUsers}>GET users</button>

                <button style={{ border: "1px solid blue", margin: "10px", padding: "10px", textAlign: "center", borderRadius: "8px", backgroundColor: "white" }}
                    onClick={updatePut}>PUT Users</button>

                <button style={{ border: "1px solid blue", margin: "10px", padding: "10px", textAlign: "center", borderRadius: "8px", backgroundColor: "white" }}
                    onClick={updatePatch}>PATCH Users</button>

                <button style={{ border: "1px solid blue", margin: "10px", padding: "10px", textAlign: "center", borderRadius: "8px", backgroundColor: "white" }}
                    onClick={deleteUser}> Delete Users</button>

                <br /><br />
                <h3 style={{ color: "blue" }}>NAME: <input type="text" placeholder="Enter Name" value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: "30%", padding: "8px", margin: "8px",fontSize:"15px" }} /> </h3>

                <h3 style={{ color: "blue" }}>EMAIL: <input type="email" placeholder="Enter Email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "30%", padding: "8px", margin: "8px",fontSize:"15px" }} /></h3>

                <button style={{ border: "1px solid blue", margin: "10px", padding: "10px", textAlign: "center", borderRadius: "8px", backgroundColor: "white" }} onClick={addUser}>Add User</button>
            </div>

            <div style={{ textAlign: "center", margin: "20px", marginLeft: "100px", padding: "20px" }}>

                {users.map((user) => (
                    <div key={user.id} style=
                        {{
                            padding: "10px",
                            border: "2px solid blue",
                            margin: "8px",
                            width: "90%",
                            textAlign: "center",
                            borderRadius: "10px",
                        }}>

                        <p><b>ID:</b> {user.id}</p>
                        <p><b>Name:</b> {user.name}</p>
                        <p><b>USER NAME:</b> {user.username}</p>
                        <p><b>Email:</b> {user.email}</p>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default C;







