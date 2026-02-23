import React, { useState } from "react"
import Login from "./Login"
function Roles() {
    let [role, setRole] = useState(localStorage.getItem("role") || "")


    let selectRole = (selectedRole) => {
        localStorage.setItem("role", selectedRole);
        setRole(selectedRole)
    }
    return (
        <div style={{ textAlign: "center", backgroundColor: "darkgray", padding: "16px", margin: "50px", 
             borderRadius: "10px", height: "400px", alignContent: "center", width:"600px"}}>

            {role == ""    ? 
            
            <div style={{color:"navy",fontSize:"30px"}}>

                <h2>Select your role</h2>

                <button onClick={() => selectRole("Employee")} 
                    style={{ margin: "3px",borderRadius:"10px",padding:"10px",
                    marginBlock:"10px",backgroundColor:"snow",fontSize:"25px",cursor:"pointer" }}> EMPLOYEE </button>

                <button onClick={() => selectRole("HR")} 
                    style={{ margin: "3px",borderRadius:"10px",padding:"10px",
                    marginBlock:"10px",backgroundColor:"snow",fontSize:"25px",cursor:"pointer" }}> HR </button>

                <button onClick={() => selectRole("Admin")} 
                    style={{ margin: "3px",borderRadius:"10px",padding:"10px",
                    marginBlock:"10px",backgroundColor:"snow",fontSize:"25px",cursor:"pointer" }}> ADMIN </button>

                <button onClick={() => selectRole("Manager")} 
                    style={{ margin: "3px",borderRadius:"10px",padding:"10px",
                    marginBlock:"10px",backgroundColor:"snow",fontSize:"25px",cursor:"pointer" }}> MANAGER </button>
                
            </div> : < Login role={role} setRole={setRole} />}

        </div>
    )
}
export default Roles;

