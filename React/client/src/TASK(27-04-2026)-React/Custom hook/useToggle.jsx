import React, { useState } from "react";

function useToggle() {

    let [value, setValue] = useState(false);

    let toggle = () => {
        setValue(!value)
    }
    return [value, toggle]
}

export default useToggle;


