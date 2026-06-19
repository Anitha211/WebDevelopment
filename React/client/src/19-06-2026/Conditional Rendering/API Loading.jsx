import React, { useState } from "react";

function Loading() {

    let [loading, setLoading] = useState(true);

    let [user, setUsers] = useState([]);

    let getUser = () => {
        setLoading(true);

        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/users/1")
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data);
                    setLoading(false)
                })
        }, 3000)
    }

    return (

        <div style={{ textalign: "center", margintop: "50px", fontfamily: "Arial, Helvetica, sans-serif", }}>

            <h1 style={{ color: "blue" }}>API Loading Spinner</h1>

            {loading ? <div>
                <div>
                    <h2>Loading.....</h2>
                </div>
            </div> :
                (user && <div>
                    <h2>User Details</h2>
                    <p><b>Name:</b> {user.name}</p>
                    <p><b>UserId:</b> {user.userId}</p>
                    <p><b>Email:</b> {user.email}</p>
                </div>)
            }

            <button onClick={getUser} style={{background:"blue", padding: "5px", color:"white",
                border:"none", borderRadius:"5px",
            }}>Get User Details</button>

        </div>
    )

}

export default Loading;