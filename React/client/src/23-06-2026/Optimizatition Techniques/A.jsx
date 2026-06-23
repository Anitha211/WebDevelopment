import React, { useState } from "react";
import B from "./B";
import C from "./C";

function A() {

    let [count, setCount] = useState(0);

    let [data, setData] = useState("React");

    console.log("A Component");

    return (

        <div>

            <h2>A Component</h2>

            <button onClick={() => setData("React.Memo")}>
                Data Changed</button>

            <B count={count}
            setCount={setCount}/>

            <C data={data} />

        </div>
    )
}

export default A;


