import React, { useState, useEffect} from "react";

function C({goToLogin}){

    let[email, setEmail] = useState("")

    let[password, setPassword] = useState("")

    useEffect(()=>{
         console.log("SignUp")
        },[email, password])

    useEffect(()=>{
         console.log(email, password)
        },[email, password])

    let handleSubmit = (e) => {
    e.preventDefault();
    console.log("signup successfully");
    goToLogin(true);
    setEmail(email)};

    let handleChangeUsername = (event) => {
      setEmail(event.target.value)}

    let handleChangePassword = (event) => {
     setPassword(event.target.value)}

return(
        <div>
            <form onSubmit={handleSubmit}>

                <h2>SignUp</h2>
                <p>UserName:{email}</p>
                <p>password:{password}</p>

                <input type="email" placeholder="email" value={email} onChange={handleChangeUsername}/>
                <br/>
                <br/>
                <input type="Password" placeholder="password" value={password} onChange={handleChangePassword} />
                <br/>
                <br/>
                <button type="submit">Register</button>
                <p>Already have an Account</p>
                <button onMouseMove={goToLogin}>Login</button>
            </form>
        </div>
    )}
export default C;