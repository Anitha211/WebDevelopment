import React, { useEffect, useState } from "react";
import axios from "axios";

function B() {

    let [user, setuser] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("")

    useEffect(() => {

        // setLoading(true); 

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setuser(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError("something went wrong");
                setLoading(false);
                console.log(err);

            })
    }, []);

    return (
        <div>

            <h1>Users Data</h1>

            {loading ? <h3>Loading...</h3> :

                error ? <h3>{error}</h3> :
                    <ul>
                        {user.map((user) => (
                            <li key={user.id}>
                                {user.id}. {user.name}

                            </li>
                        ))}
                    </ul>
            }

        </div>
    )

}

export default B;





