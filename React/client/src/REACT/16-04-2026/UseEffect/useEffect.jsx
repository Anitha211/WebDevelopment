import React, { useEffect, useState } from "react";

function A() {

    let[count, setCount] = useState(0);

    let[isLogin, setIslogin] = useState(false);

    useEffect(() => {
        console.log("Count Changed: ", count);
        
    },[count]);

    useEffect(() => {
        if(isLogin){
            console.log("User is logged in");
        } else {
            console.log("User logged out");
            
        }
    },[isLogin])

    return(

        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 5)}>Increase</button>

            <button onClick={() => setCount(count - 2)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>

            <br></br>

            <h2>{isLogin ? "Welcome user!" : "Logged Out"}</h2>
            <button onClick={() => setIslogin(!isLogin)}>{isLogin ? "Logout" : "login"}</button>
            
        </div>
    )
}

export default A;






