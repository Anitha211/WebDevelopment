import React from "react";

let C = React.memo(({mul, Decrease}) => {

      console.log("C Component");

    return (

        <div>
            <h3>UseMemo</h3>
            <p>Count * 3: {mul}</p>

            <button onClick={Decrease}>Decrease</button>
        </div>
    )
})

export default C;