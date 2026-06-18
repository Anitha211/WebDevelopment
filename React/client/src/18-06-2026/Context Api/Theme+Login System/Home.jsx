import React, { useContext } from "react";
import { AppContext } from "./createContext";

function Home() {

    let { theme, toggleTheme, user, login } = useContext(AppContext);

    return (
 
            <div>
                <h2>Current Theme: {theme}</h2>

                <button onClick={toggleTheme}> Toggle Theme </button>

                <br /><br />

                {!user && <button onClick={login}> Login </button>}

                {user && <div>
                    <h2>User Details</h2>
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>
                </div>}
            </div>
    )
}

export default Home;

