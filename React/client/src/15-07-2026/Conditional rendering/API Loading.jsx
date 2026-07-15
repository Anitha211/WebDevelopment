import React, { useState } from "react";

function APILoading() {

    let [employee, setEmployee] = useState(null);

    let [loading, setLoading] = useState(false);

    let getEmployee = async () => {
        setLoading(true);

        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        let data = await response.json();

        setEmployee(data);
        setLoading(false);
    };

    return (

        <div>

            <h2>Api Fetching</h2>

            <button onClick={getEmployee}> Load Employee </button>

            <br /><br />

            {loading ? <h2>Loading...</h2>
                : employee ? <div>

                    <h2>Employee Details</h2>

                    <p><b>Name:</b>{employee.name}</p>
                    <p><b>Email:</b> {employee.email}</p>
                    <p><b>Phone:</b> {employee.phone}</p>
                </div> : <h3>No Employee Data</h3>
            }

        </div>
    )
}

export default APILoading;


