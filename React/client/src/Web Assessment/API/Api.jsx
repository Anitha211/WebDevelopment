import React, { useEffect, useState } from "react";

function Api() {

    let [data, setData] = useState([]);

    let [loading, setLoading] = useState(true);

    let [error, setError] = useState("");


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")

        .then((res) => res.json())
        .then((d) => {
            console.log(d);
            setData(d);
            setLoading("Data loading...");
            setError("")     
        })
        .catch((e) => {
            console.log(e);
        })

    },[])

    return(

        <div>

            <h1>API Fetch</h1>

            <h2>Loading data: {loading}</h2>
            <p>{error}</p>

            {data.map((item) => (
                <div key={item.id}>
                    <h3>{item.id}</h3>
                    <h3>{item.name}</h3>
                    <h3>{item.username}</h3>

                </div>
            ))}

        </div>
    )
}

export default Api;