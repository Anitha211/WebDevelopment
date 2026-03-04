import React, { useState } from "react";
import "./C.css"

function B() {

    let [name, setName] = useState("");

    let [message, setMessage] = useState("")

    let [type, setType] = useState("")

    let handleCheck = () => {
        if (name == "") {
            setMessage("Please enter your name");
            setType("error")
        } else {
            setMessage("Name is submitted")
            setType("success")
        }
    }

    return (

        <div>
            <input type="text" placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleCheck}>Submit</button>
            <h3>{message && <p className={type}>{message}</p>}</h3>
        </div>

    )
}

export default B;

