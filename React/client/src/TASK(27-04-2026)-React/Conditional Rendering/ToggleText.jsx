import React, { useState } from "react";

function ToggleText() {

    let [show, setShow] = useState(false);

    return(
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? "Hide Message" : "Show Message"}
            </button>

            {show && <div>

                <h2>Hello User</h2>
                <p>Welcome to react practice</p>
                
                </div>}

            {!show && <p>
                 Click Button to see message
                </p>}
        </div>
    )
}

export default ToggleText;