import React, { useEffect, useState} from "react";

function B({setLogin,setUser, goToSignup}){

    let[username, setUsername] = useState("")

    let[password, setPassword] = useState("")

    useEffect(()=>{
         console.log("Login")
        },[username, password])

    useEffect(()=>{
         console.log(username, password)
        },[username, password])

    let handleSubmit = (e) => {
    e.preventDefault();
    console.log("login button is clicked");
    setLogin(true)
    setUser(username)};

    let handleChangeUsername = (event) => {
      setUsername(event.target.value)}

    let handleChangePassword = (event) => {
     setPassword(event.target.value)}

return(
        <div>
            <form onSubmit={handleSubmit}>

                <h2>Login</h2>
                <p>UserName:{username}</p>
                <p>password:{password}</p>

                <input type="text" placeholder="Username" value={username} onChange={handleChangeUsername}/>
                <br/>
                <br/>
                <input type="Password" placeholder="password" value={password} onChange={handleChangePassword} />
                <br/>
                <br/>
                <button type="submit">Login</button>
                <p>Don't have an Account</p>
                <button onMouseMove={goToSignup}>SignUp</button>
            </form>
        </div>
    )}
export default B;