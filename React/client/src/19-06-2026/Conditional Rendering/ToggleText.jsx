import React, { useState } from "react";

function ToggleText() {

    let [show, setShow] = useState(false);

    return(

        <div>
            <h2>Show/Hide Text</h2>

            <button onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>

            {show && <h2>Welcome to React!</h2>}
            
        </div>
    )
}

export default ToggleText;


