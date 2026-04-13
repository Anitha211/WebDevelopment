import React, { useState } from "react"
import Login from "./Login"
function Roles() {
    let [role, setRole] = useState(localStorage.getItem("role") || "")
    
    let selectRole = (selectedRole) => {
        localStorage.setItem("role", selectedRole);
        setRole(selectedRole)
    }

    return (
        <div style={{background:"lightgray",padding:"15px", borderRadius:"20px"}}>
            {role == "" ? <div>
                <h2 >Select your role</h2>
                <button onClick={() => selectRole("Employee")}
                    style={{background:"blue",color:"white", borderRadius:"4px",padding:"5px",margin:"5px",cursor:"pointer"}}> EMPLOYEE </button>
                <button onClick={() => selectRole("HR")} 
                    style={{background:"blue",color:"white", borderRadius:"4px",padding:"5px",margin:"5px",cursor:"pointer"}}> HR </button>
                <button onClick={() => selectRole("Admin")} 
                    style={{background:"blue",color:"white", borderRadius:"4px",padding:"5px",margin:"5px",cursor:"pointer"}}> ADMIN </button>
                <button onClick={() => selectRole("Manager")} 
                    style={{background:"blue",color:"white", borderRadius:"4px",padding:"5px",margin:"5px",cursor:"pointer"}}> MANAGER </button>
                
            </div> : < Login role={role} setRole={setRole} />
            }
        </div>
    )
}
export default Roles;



