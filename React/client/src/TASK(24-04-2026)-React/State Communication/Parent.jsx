import React, { useState } from "react";
import Child from "./Child";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3"

function Parent() {

    let msg = "Hello from Parent component";
    // console.log(msg);

    let [count, setCount] = useState(1);
    let increaseCount = () => {

        setCount(count + 1)
    }

    // Child to Parent

    let [message, setMessage] = useState("");

    let getdataFromChild1 = (data) => {
        setMessage(data)
    };

    // child to child

    let [qty, setQty] = useState(1);

    return (
        <div>
            <h2><u>Child to Parent</u></h2>
            <h3>Parent Component</h3>
            <button onClick={increaseCount}>Increase Count: {count}</button>
            <Child msg={msg}
                value={count} />

            <hr></hr>

            {/* child to parent */}
            <h2><u>Child to Parent</u></h2>
            <h4>Message from child1 to Parent is - {message}</h4>
            <Child1 sendData={getdataFromChild1} />

            <hr></hr>

            {/* child to child */}
            <h2><u>Child to Child</u></h2>
            <h2>Shopping Cart</h2>
            <Child2 updateQty={setQty}
                    quantity = {qty}
            />
            <Child3 quantity = {qty}/>
            
        </div>
    )
}

export default Parent;
