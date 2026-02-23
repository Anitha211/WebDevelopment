import React from "react"
import useFetch from "./useFetch";
import "./style.css"
function B() {
    let { data, error } = useFetch();

    console.log(data);
    console.log(data[1]);
    
    return (
        <div className="container">
            <h1 className="title">User Lists</h1>

            {error ? <p className="error">Error: {error}</p> : <div className="user1">
                {data.map((user) => {
                    return (
                        <div key={user.id} className="user">
                            
                            <h2>user ID: {user.id}</h2>
                            <h3>user Name: {user.name}</h3>
                            <h3>Address--City: {user.address.city}</h3>
                            
                        </div>
                    )})}
                    </div>}
             </div>
    )
}
export default B;