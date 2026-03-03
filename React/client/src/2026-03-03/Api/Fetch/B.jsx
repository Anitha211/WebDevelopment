import React,{useState}from "react";

function B() {

    let[user, setUsers] = useState("")
     
    let handleAdd = () => {
        fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers: {
                 "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                  name: "Anitha",
                  email:"anitha122@gmail.com"
            }),
        })
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((error) => console.log(error))
    }
    return(

        <div>

            <h2>Post</h2>
           <h3>Name: {user.name}</h3>
           <h4>Email: {user.email}</h4>
           <h5>ID: {user.id}</h5>
              <button onClick={handleAdd}>POST</button>
        </div>
    )
}

export default B;