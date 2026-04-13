import React, { useState } from "react";

function Age() {

    let[age, setAge] = useState("");

    return(
        <div style={{}}>
            <h2>Age Checker</h2>

            <input
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

            {age && (age >= 18 ? (
                <p>You are eligible to vote</p>
            ) : (
                <p>You are Not eligible</p>
            )  
        )}

        </div>
    )
}

export default Age;




