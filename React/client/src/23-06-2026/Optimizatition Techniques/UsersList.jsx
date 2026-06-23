import React from "react";

let UsersList = React.memo(({ users, handleDelete }) => {

    console.log("UserList Rendered");

    return (

        <div>
            {users.map(user => (
                <div key={user.id}>
                    <h3>ID: {user.id}</h3>
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>

                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
            ))}
        </div>
       
    )
});

export default UsersList;


