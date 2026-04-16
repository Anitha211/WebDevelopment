import React, { useCallback, useMemo, useState } from "react";
import B from "./B";
import C from "./C";
import D from "./D"


let A = React.memo(() => {
  console.log("A Component");

  let [count, setCount] = useState(0);

  let [age, setage] = useState(18);

  let [data, setData] = useState("React.memo");

  let Cal = useMemo(() => {
    return count * 2
  }, [count])

  let updateAge = useCallback(() => {
    setage(age + 1);
  }, [age]);

  return (

    <div style={{ textAlign: "center", marginTop: "20px" }}>

      <h2> A component </h2>
      <button style={{ padding: "10px 20px", cursor: "pointer" }} 
      onClick={() => setCount(count + 1)}>
        Increase</button>

      <button style={{ padding: "10px 20px", cursor: "pointer" }} 
      onClick={updateAge}>
        Update Age</button>

      <button style={{ padding: "10px 20px", cursor: "pointer" }} 
      onClick={() => setData("USE CALL BACK")}>
        Data Changed</button>

      <B count={count}
        value={Cal} />

      <C age={age}
        updateAge={updateAge} />

      <D data={data} />

    </div>
  )

})

export default A;



