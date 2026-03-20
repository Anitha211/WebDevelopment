import React from "react";
import { useState } from "react";
import axios from "axios";

function Api() {

    let [data, setData] = useState([]);

    // 

    let getUsers = () => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                console.log("Get data:", res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // 

    let posrUsers = () => {

        axios.post("https://jsonplaceholder.typicode.com/users", {
            name: "Anitha",
            username: "Anu 123",
            email: "anitha1w2w@gmail.com"
        })

            .then((res) => {
                console.log("User Added:", res.data);
                setData([...data,
                res.data]);
            })

            .catch((error) => {
                console.log(error);
            });
    };

    // 
     
   let putUsers = () => {
        axios.put("https://jsonplaceholder.typicode.com/users/1", {
            name: "Update Put",
            username: "Update123",
            email:"Update@gmail.com"
        })
        .then((res) => {
            console.log("Update put User:", res.data);
            setData([res.data]);
        })
        .catch((error) => {
            console.log(error);
        });
    };


    // 

    let patchUsers = () => {
        axios.patch("https://jsonplaceholder.typicode.com/users/1", {
            name: "patch updated name",
            })
        .then((res) => {
            console.log("Update Patch User:", res.data);
            setData([res.data])
        })
        .catch((error) => {
            console.log(error);
        });
    };

    // 
 
     let deleteUsers = () => {
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
            .then(() => {
                setData([]);
            })
            .catch((error) => console.log(error));
    };
    
    
    return (

        <div>
            <h1>API Calls using Axios method</h1>
 
            <button onClick={getUsers}>Get Users</button>
            <button onClick={posrUsers}>Post Users</button>
            <button onClick={putUsers}>Put</button>
            <button onClick={patchUsers}>Patch</button>
            <button onClick={deleteUsers}>Delete</button>

            <div>
                {data.map((user) => {
                    return (
                        <div key={user.id}>
                            <h1>ID: {user.id}</h1>
                            <h3>Name: {user.name}</h3>
                            <h4>Email: {user.email}</h4>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
  
export default Api;
