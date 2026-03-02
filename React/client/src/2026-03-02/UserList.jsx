import React from "react";

let UserList = React.memo(({users,handleDelete})=>{

        console.log("UserList Rendered");

        return (

            <div style={{padding:"20px"}}>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr "}}>
            {users.map(user => (

                <div key={user.id} 
                     style={{border:"1px solid gray", margin:"10px", padding:"10px",
                     borderRadius:"10px", backgroundColor:"white"}}>

                    <h3>ID: {user.id}</h3> 
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>

                    <button style={{margin:"10px",padding:"8px 12px",backgroundColor:"red",color:"white",
                                borderRadius:"5px",cursor:"pointer"}} 
                            onClick={() => handleDelete(user.id)}>Delete</button>

                </div>
            ))}

            </div>
        </div>
        ) 
    });

export default UserList;