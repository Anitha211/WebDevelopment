import React, { useContext } from "react";
import { ThemeContext } from "./createContext";


function AA() {
 
    let {theme, changeTheme} = useContext(ThemeContext);

    return(
        <div>
            <h2>{theme} Mode</h2>

            <button onClick={changeTheme}>Theme</button>
        </div>
    )
}

export default AA;
