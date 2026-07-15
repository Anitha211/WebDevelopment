import React, { useState } from "react";

function AgeChecker() {

    let [age, setAge] = useState("");
    
    return (

        <div>

            <h2>Vote Eligibility Checker by Age</h2>

            <input 
                type="number"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <h2>
                { age >= 18 ? "Eligible To Vote" : "Not Eligible"}
            </h2>

        </div>
    )
}

export default AgeChecker;