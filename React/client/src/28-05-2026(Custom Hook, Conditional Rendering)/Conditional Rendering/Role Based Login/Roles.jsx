import React, { useState } from "react"
import Login from "./Login"
function Roles() {
    let [role, setRole] = useState(localStorage.getItem("role") || "")


    let selectRole = (selectedRole) => {
        localStorage.setItem("role", selectedRole);
        setRole(selectedRole)
    };


    return (
        <div>

            {role == ""    ? 
            
            <div>

                <h2>Select your role</h2>

                <button onClick={() => selectRole("Employee")}> EMPLOYEE </button>

                <button onClick={() => selectRole("HR")} > HR </button>

                <button onClick={() => selectRole("Admin")} > ADMIN </button>

                <button onClick={() => selectRole("Manager")} > MANAGER </button>
                
            </div> : < Login role={role} setRole={setRole} />}

        </div>
    )
}
export default Roles;

