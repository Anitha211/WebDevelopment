import React, { useEffect, useState } from "react";

function useInput() {

    let [value, setValue] = useState("");
    let[d, setData] = useState(0);

    let handleChange = (e) => {
        setValue(e.target.value)
    }

    let reset = () => {
        setValue("")
    }

    useEffect(() => {
        setData(value.length)
    },[value])

    return { value, handleChange, reset, d}
}

export default useInput;