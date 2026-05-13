import React, { useState } from "react";

function D() {

    let [rating, setRating] = useState("");

    let [showResult, setShowResult] = useState(false);

    let handlePerformance = () => {
        setShowResult(true);
    };

    return (

        <div>

            <h1>Employee Performance System</h1>

            <input type="number"
                placeholder="Enter Rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />

            <br /><br />

            <button onClick={handlePerformance}>Check Performance</button>

            <br /><br />

            {showResult &&

                rating >= 8 ? <div>

                <h2>Excellent Performance</h2>
                <p>Eligible for Promotion</p>
                <p>Keep Improving</p>

            </div>
                :
                <div>
                    <h2>Need Improvement</h2>
                    <p>Performance Review Required</p>

                </div>}

        </div>
    )
}

export default D;




