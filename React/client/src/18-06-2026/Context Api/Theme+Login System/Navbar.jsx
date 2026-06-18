import React, { useState } from "react";
import { AppContext } from "./createContext";

function Navbar() {

    let { user, logout } = useState(AppContext);

    return (

        <div>

            <h2>My App</h2>

            {user ? <div>

                <h2>Welcome, {user.name}</h2>
                <button onClick={logout} style={{ marginLeft: "10px" }}> Logout </button>

                </div> :  <h4> Please Login</h4>

            }

        </div>
    )

}

export default Navbar;
