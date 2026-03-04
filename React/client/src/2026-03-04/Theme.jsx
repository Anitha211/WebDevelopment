import React, { useState } from "react";
import "./C.css"

function Theme() {

    let [darkMode, setDarkMode] = useState(false);
    console.log(darkMode);
    

    return(

        <div className= {darkMode ? "dark" : "light"}>

             <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

             <button onClick={()=>setDarkMode(!darkMode)}>
                {
                    darkMode ? "Switch to Light Mode" : 
                                "Switch to Dark Mode"
                }
             </button>
            
        </div>
    )
}

export default Theme;