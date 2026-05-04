import React, { useState } from "react";

function Theme() {
    const [dark, setDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });
    let ToggleTheme = () => {
        let newTheme = !dark;
        setDark(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light")
    };
    return (
    
    <div style={{ textAlign: "center" }}>

        <h1>Dark/Light Mode</h1>

        <h2 style={{
            textAlign: "center", background: dark ? "White" : "Black",
            color: dark ? "black" : "white", padding: "20px", border: "none", borderRadius: "15px"
        }}>
            {dark ? "Light Mode" : "Dark Mode"}</h2>

        <button onClick={ToggleTheme} 

        style={{
            padding: "10px 20px", fontSize: "16px",
            borderRadius: "5px", cursor: "pointer", 
            background: dark ? "White" : "Black", 
            color: dark ? "black" : "white"
        }}>
            {dark ? "Switch to Light" : "Switch to Dark"}

        </button>
        
    </div>
    )
}
export default Theme;