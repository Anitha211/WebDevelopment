import React, { useState } from "react";

function useToggle() {

    let [isVisible, setIsVisible] = useState(false);

    let toggle = () => {
        setIsVisible(!isVisible)
    };

    return {
        isVisible,
        toggle
    }
}

export default useToggle;


