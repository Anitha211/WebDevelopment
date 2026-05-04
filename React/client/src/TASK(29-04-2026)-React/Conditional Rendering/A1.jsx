import React, { useState } from "react";

function A1() {

    let [isLoggedIn, setIsLoggedIn] = useState(false);

    // 

    let [message,setMessage] = useState(false);

    // 

    let [loading, setLoading] = useState(false);

    // 

    let handleClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        },2000)
    }

    // 

    return(

        <div>
            <h1>{isLoggedIn ? "Welcome Back" : "Please Login"}</h1>
            <br></br>

            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>

            <hr/>

            <h2>{message && <p>This Message is Visible</p>}</h2>

            <button onClick={() => setMessage(!message)}>{message ? "hide" : "show"}</button>

            <hr/>

            {loading ? <h3>Loading....</h3> : <h3>Data Loaded</h3>}

            <button onClick={handleClick}>Fetch Data</button>




        </div>
    )
}

export default A1;