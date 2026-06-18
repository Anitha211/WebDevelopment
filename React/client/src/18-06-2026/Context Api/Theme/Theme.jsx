import React, { useContext } from "react";
import ContextTheme from "./CreateContext";

function Theme() {

    let { theme, changeTheme } = useContext(ContextTheme);

    return(

        <div>

            <h1>Theme Dark/Light Mode</h1>

            <h3  style={{background: theme === "light" ? "white" : "black", 
                         color: theme === "light" ? "black" : "white", padding: "20px",
                        borderRadius: "10px", border:"1px solid blue"}}
            
            >{theme} Mode</h3>

            <button onClick={changeTheme} style={{padding: "10px 20px", marginTop: "10px", borderRadius:"5px"}}> Change Theme 
            </button>


        </div>
    )
}

export default Theme;
