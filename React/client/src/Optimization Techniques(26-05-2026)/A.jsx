import React, { useCallback, useMemo, useState } from "react";
import B from "./B";
import C from "./C";

function A() {

    let [count, setCount] = useState(0);

    let [data, setData] = useState("React");

    let updateCount = useCallback(() => {
        setCount(count + 10);
    }, [count]);

    let UseMemo = useMemo(() => {
        return count * 2
    }, [count]);

    console.log("A Component");

    return (

        <div>

            <h2>A Component</h2>

            <button onClick={() => setData("React.Memo")}>
                Data Changed</button>

            <B count={count}
                updateCount={updateCount}
                UseMemo={UseMemo} />

            <C data={data} />

        </div>
    )
}

export default A;




