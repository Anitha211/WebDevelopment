import React from "react";
import useToggle from "./useToggle";

function Custom() {

    let[isLogin,setLogin] = useToggle(false);


    return(

        <div>
            <h2>{isLogin ? "Logged In" : "Logged Out"}</h2>

            <button onClick={setLogin}>Toggle</button>
        </div>
    )
}

export default Custom; 