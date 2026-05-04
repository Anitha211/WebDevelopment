import React, { useState } from "react";
import Dashboard from "./Dashboard";

function Roles() {

    let [roles, setRoles] = useState(localStorage.getItem("roles") || "");

    let selectRole = (selectedRole) => {
        localStorage.setItem("role", selectedRole);
        setRoles(selectedRole);
    }

    return (

        <div>
            <h1>Role based login</h1>

            {roles === "" ? <div>
                <h2>Select your Role</h2>
                <button onClick={() =>selectRole("Admin")}>Admin</button>
                <button onClick={() => selectRole("HR")}>HR</button>
            </div> : 
                 <Dashboard role={roles}
                            setRoles={setRoles}
                 />
            }
        </div>
    )
}

export default Roles;