import React, { useState } from "react"
import Login from "./Login";
function Profile() {
    let [loginIN, setLogin] = useState(false)
    let [exist,setExist] = useState(true)
    let ChangeLogin = () => {
        setLogin(true)
    }
    return (
        <div>
            {loginIN ? 
            (<div><h1>Profile</h1></div> ): exist ? (<Login value={ChangeLogin} /> )
            : 
            (<h1>SignUP</h1>)}

            {loginIN ? 
            <button onClick={() => setLogin(false)}>Logout</button>
                : exist ?
                    (<div>
                        <p>New User Please SignUP</p>
                        <button onClick={() => setExist(false)}>SignUP</button>
                    </div>)
                    :
                    (<div>
                        <p>Already Register - Login</p>
                        <button onClick={() => setExist(true)}>Login</button>
                    </div>)
                    }
                    </div>
                    )}

export default Profile;