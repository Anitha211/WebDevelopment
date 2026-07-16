import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {

    let [users, setUsers] = useState([]);

    let [name, setName] = useState("");

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
        })
            .then((res) => {
                setUsers([...users, res.data])
                setName("")
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
            })
            .then((res) => {
                setUsers(users.map((user) =>
                    user.id == id ? res.data : user
                ))
                setId(null);
                setName("");
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
    };
    return (
        <div>
            
            <h1>Api call by using axios</h1>
            
            <div>
            <input type="text" placeholder="Enter name" value={name}
                onChange={(e) => setName(e.target.value)}/>
                
            {id ? <button onClick={handlePut} className="put-btn"> PUT</button> : 
            
                <button onClick={handleAdd} className="add-btn"> ADD</button>}

            </div>

            <div>
            {users.map(user => (

                <div key={user.id}>

                    <p>{user.id} </p>
                    <p>{user.name} </p>
                    <p>{user.email} </p>

                    <button onClick={() => handleEdit(user)}>EDIT</button>

                    <button onClick={() => handlePatch(user.id)}>PATCH</button>

                    <button onClick={() => handleDelete(user.id)}>DELETE</button>

                </div>

            ))};

            </div>

        </div>
    )
}

export default Axios;


