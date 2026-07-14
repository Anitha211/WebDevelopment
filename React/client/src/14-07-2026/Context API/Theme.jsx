import React, { useContext } from "react";
import  A  from "./createContext"

function Theme() {

    let {theme, ChangeTheme} = useContext(A);

    return(

        <div style={{textAlign: "center"}}>

            <h1>Theme Dark/Light Mode</h1>

            <h3 style={{ 
            background: theme === "light" ? "white" : "black",
            color : theme === "light" ? "black" : "white",
            padding: "20px",borderRadius: "10px", textAlign:"center",
            border:"1px solid blue",

            }}>{theme} Mode</h3>

            <button onClick={ChangeTheme} style={{padding:"9px", background: theme === "light" ? "white" : "black",
            color : theme === "light" ? "black" : "white", borderRadius:"5px", cursor:"pointer" }}>

                Switch to {theme == "light" ? "Dark" : "Light"}</button>
        </div>
    )
}

export default Theme;


