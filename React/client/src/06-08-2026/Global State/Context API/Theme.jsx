import React, { useContext } from "react";
import ThemeContext from "./CreateTheme";

function Theme() {

    let {theme, toggleTheme} = useContext(ThemeContext);

    return (

        <div style={{
            background: theme === "light" ? "white" : "blue",
            color: theme === "light" ? "black" : "white",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            padding:"20px",
            border: "none",
        }}>

            <h2>Theme: {theme} </h2>

            <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    )
}

export default Theme;


