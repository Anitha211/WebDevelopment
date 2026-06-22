import React, { useState } from "react";

function useCounter() {

    let [count, setCount] = useState(0);

    let increase = () => setCount(count + 1);

    let decrease = () => setCount(count - 1);


return {increase, decrease, count};

};

export default useCounter;


