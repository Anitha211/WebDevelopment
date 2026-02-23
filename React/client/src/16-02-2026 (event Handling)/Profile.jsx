import React, { useEffect, useState } from "react"
import Login from "./Login";

function Profile() {

    useEffect(() => {
        console.log("Profile Page")
    }, [])

    let [loginIN, setLogin] = useState(false)

    let [exist, setExist] = useState(true)

    //  
  let ChangeLogin = () => {
     setLogin(true) 
    }
    return (
        <div>
            {loginIN ? <div><h1>Profile</h1> </div> : exist ? <Login value ={ChangeLogin}/> : <h1>Signup</h1>}
            
            {loginIN ?
                 <button onClick={()=>setLogin(false)}>logout</button> : exist   ? 
                 <div>
                    <p>New user please Signup</p>
                    <button onMouseMove={()=> setExist(false)}>Sign up</button>
                 </div>    :   <div>
                    <p>Already Register plase Login</p>
                    <button onClick={()=> setExist(true)}>Login</button>
                 </div>
        }
                    
        </div>
    )
}

export default Profile;