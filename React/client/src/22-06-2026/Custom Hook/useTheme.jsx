import React, { useState } from "react";

function useTheme() {

    let [dark, setDark] = useState(false);

    let ToggleTheme = () => {
        setDark(!dark);
    };

    return { dark, ToggleTheme } 
}

export default useTheme;


