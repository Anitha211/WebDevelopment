import React, { useState } from "react";
import { AppContext } from "./createContext";
import Navbar from "./Navbar";
import Home from "./Home";

function AppProvider() {

    let [theme, setTheme] = useState("light");
    let [user, setUser] = useState(null);

    let toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    let login = () => {
        setUser ({
            name : "Anitha",
            email: "anitha@gmail.com"
        });
    };

    let logout = () => {
        setUser(null)
    };

    return(

        <div>

            <AppContext.Provider value={{theme, toggleTheme, user, login, logout}}>

                <Navbar/>
                <Home/>

            </AppContext.Provider>

        </div>
    )
}

export default AppProvider;