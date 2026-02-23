import React, { useState, useEffect } from "react"

function Login({value}){

let[a,seta]=useState("");

useEffect(()=>{ 
  console.log(a);
},[a])

useEffect(()=>{
  console.log("Login");},
  []);

let handleSubmit = (e) => {
  e.preventDefault() ;
  value();
  seta("");
      console.log("login button is clicked");
      console.log(e);
      }

let handleChange = (event) => {
      console.log("Handle change calls");
      console.log(event.target.value);
      seta(event.target.value)}

      return(
        <div>
          <h1>Profile</h1>
          <h3>value:{a}</h3>
          <form onSubmit={handleSubmit}>
             <input type="text" value={a} onChange={handleChange}/>
             <br/>
             <br/>
            <button type="submit">LOGIN</button>
            </form>
             <br/>
             <br/>
             <button onClick={handleSubmit}>Click</button>
        </div>
    )
}
export default Login;