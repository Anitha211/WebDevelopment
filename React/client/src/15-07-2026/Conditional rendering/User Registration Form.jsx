import React, { useState } from "react";

function RegistrationForm() {

    let [name, setName] = useState("");

    let [registered, setRegistered] = useState(false);

    let handleRegister = () => {
        setRegistered(true);
    };

    return (

        <div>

            <h2>User Registration</h2>

            <input type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <button onClick={handleRegister}>Register</button>

            { registered ? name !== "" ? <h3>Welcome, {name}</h3>
                : <h3>Please Enter your name</h3>
                : <h3>Please Register</h3>
            }

        </div>
    )

}

export default RegistrationForm;


