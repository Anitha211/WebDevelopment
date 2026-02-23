import React, { useEffect, useState } from "react";

function useInput(){
    let[value, setValue] = useState("");

    let[a,seta] = useState(0);

    let handleChange = (e) => {
        setValue(e.target.value)
    }
    let reset = () => {
        setValue("");
    }

    useEffect(() => {
        seta(value.length)

    },[value])

    return {value, handleChange, reset, a}
};

export default useInput;