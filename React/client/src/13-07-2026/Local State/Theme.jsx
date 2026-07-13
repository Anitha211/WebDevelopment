import React, { useState } from "react";

function Theme() {

    let [theme, setTheme] = useState(false);

    return (

        <div style={{
            background: theme ? "black" : "white",
            color: theme ? "white" : "black", padding: "20px"
        }}>

            <button onClick={() => setTheme(!theme)}>
                Change Theme
            </button>
        </div>
    )
}

export default Theme;


