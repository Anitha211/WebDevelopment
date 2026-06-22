import React from "react";

import useTheme from "./useTheme";

function Theme() {

    let { dark, ToggleTheme } = useTheme();

    return(

        <div style={{background: dark ? "black" : "white", 
            color: dark ? "white" : "black", padding: "20px", border:"none", borderRadius:"5px"
        }}>

            <h2>{dark ? "DARK MODE" : "Light Mode"}</h2>

            <button onClick={ToggleTheme}> Toggle Theme </button>

        </div>
    )
}

export default Theme;