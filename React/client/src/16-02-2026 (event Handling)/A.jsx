import React, { useState } from "react";

import B from "./B"
import C from "./C"
import "./style.css"

function A(){

    let [isLogin,setLogin] = useState(false);

    let[signup, setSignup] = useState(false);

    

    let goToSignup = () =>{
        setSignup(true) }

    let goToLogin = () => {
        setLogin(true)
    } 

let[user, setUser] = useState(null);

    return(
        <div className="container">

            <h1>Auth flow</h1>

            {!isLogin && !signup && 

            <B setLogin={setLogin}
               setUser={setUser}
               goToSignup = {goToSignup}/>}

            {!isLogin && signup && 
              <C goToLogin={goToLogin}/>
            }

            {isLogin && <div>
                <h2>Welcome, {user}</h2>
                <button onClick={()=>setLogin(false)}>Logout</button>
               </div>}

                {signup && <div>
                <h2>Welcome, {user}</h2>
                <button onClick={()=>setSignup(false)}>Logout</button>
               </div>}
            </div>)
}
export default A;