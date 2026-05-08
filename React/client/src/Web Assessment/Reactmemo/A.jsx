import React, { useCallback, useMemo, useState } from "react";
import B from "./B"
import C from "./C"


function A() {

    let [count, setCount] = useState(0);

    console.log("A Component");

    // useCallback - to memorize function and better perfomance

    let Increase = useCallback(() => {

        setCount(count + 2)

    }, [count]);


    let Decrease = useCallback(() => {

        setCount(count + 2)

    }, [count]);

    // usememo - to maintain the complex calculations

    let mul = useMemo(() => {

        return count * 3;
    }, [count]);

    // Recat.Memo - to prevent the unnessary renders

    return (

        <div>

            <h1>Performance Optimization</h1>
            <B count={count}
                Increase={Increase} />

            <C mul={mul}
                Decrease={Decrease}
            />

        </div>
    )
}

export default A;
