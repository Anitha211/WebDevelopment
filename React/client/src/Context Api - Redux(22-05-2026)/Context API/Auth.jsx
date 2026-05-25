import React, { useContext } from "react";
import Context1 from "./CreateContext";

function Auth() {

    let {isLogin, toggleLogin} = useContext(Context1);

    return(

        <div style={{textAlign:"center"}}>

            <h1>Auth Login Context</h1>

            <h2 style={{background: isLogin ? "green" : "red", color:"white",
                     padding:"20px", borderRadius:"10px", width:"250px", margin:"20px auto"
            }}>
                
                {isLogin ? "User Logged In" : "User Logged Out"}</h2>

            <button onClick={toggleLogin}
                    style={{padding: "12px 20px", border:"none", borderRadius:"8px",
                        background:"blue", color: "white", fontSize:"16px", cursor:"pointer"
                    }}

            >{isLogin ? "Logout" : "Login"}</button>
            
        </div>
    )
}

export default Auth;




