import React, { useState } from "react";

function Feedback() {

    let [feedback, setFeedback] = useState("");
    let [submitted, setSubmitted] = useState(false);

    return (

        <div>

            <textarea 
                  placeholder="Write your feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
            />

            <br/><br/>

            <button onClick={() => setSubmitted(true)}> Submit </button>

            {submitted && <h3>Feedback Submitted: {feedback}</h3>}

        </div>
    )
}

export default Feedback;