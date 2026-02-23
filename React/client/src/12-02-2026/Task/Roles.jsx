import React, { useState } from "react"
import Login from "./Login"
function Roles() {
    let [role, setRole] = useState(localStorage.getItem("role") || "")


    let selectRole = (selectedRole) => {
        localStorage.setItem("role", selectedRole);
        setRole(selectedRole)
    }
    return (
        <div style={{ textAlign: "center" }}>
            {role == "" ? <div>
                
                <h2>Are you a?</h2>
                <button onClick={() => selectRole("Employee")} style={{ margin: "3px" }}> Employee </button>
                <button onClick={() => selectRole("HR")} style={{ margin: "3px" }}> HR </button>
                <button onClick={() => selectRole("Admin")} style={{ margin: "3px" }}> Admin </button>
                <button onClick={() => selectRole("Manager")} style={{ margin: "3px" }}> Manager </button>
                    
            </div> : < Login role={role} setRole={setRole} />}
        </div>
    )
}
export default Roles;

