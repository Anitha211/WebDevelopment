import React from "react"

function Login({value}){
     console.log(value);
     
    return(
        <div>
          <h1>Profile</h1>
          <form onSubmit={value}>

            <button type="submit">LOGIN</button>

          </form>
        </div>
    )
}

export default Login;