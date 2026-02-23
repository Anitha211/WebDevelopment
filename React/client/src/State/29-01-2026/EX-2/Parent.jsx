import React, { useState } from "react"
import ChildA from "./ChildA";
// import ChildB from "./ChildB";

function Parent(){
    let[value,setValue] = useState("");
    return(
        <div>
            <h2>Parent</h2>
            <ChildA setValue={setValue}
                    value={value}
            />
            {/* <ChildB value={value}/> */}
        </div>
    )
}

export default Parent;