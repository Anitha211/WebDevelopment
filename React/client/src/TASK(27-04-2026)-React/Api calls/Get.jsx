import React, { useEffect, useState } from "react";

function Get() {

    let [data, setData] = useState([]);

    let [loading, setLoading] = useState(false);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);

            })
    }, []);

    // 

    

    return (

        <div>
            <h2>User List</h2>

            <div>
                {loading ? <h3>Loading data.....</h3> :

                    data.map((user) => (
                        <p key={user.id}>
                            {user.name}
                        </p>
                    ))
                }
            </div>
        </div>
    )
}

export default Get;



