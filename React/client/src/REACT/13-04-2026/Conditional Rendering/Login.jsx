import React from "react"

function Login({ username, setUsername, login}){
     
    return(
        <div>
          
          <label><b>Username: </b></label>
          <input type="text"
                 placeholder="Enter username"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
           />

           <br></br>
           <br></br>

           <button onClick={login}>Login</button>
        </div>
    )
}

export default Login;