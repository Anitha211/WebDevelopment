import React from "react";

let UserList = React.memo(({users,handleDelete})=>{

        console.log("UserList Rendered........");

        return (

            <div style={{padding:"20px",textAlign:"center"}}>

            <div>
            {users.map(user => (

                <div key={user.id} >

                    <h3>ID: {user.id}</h3> 
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>

                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}

            </div>
        </div>
        ) 
    });

export default UserList;








