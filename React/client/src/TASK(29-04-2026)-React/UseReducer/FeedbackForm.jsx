import React, { useState } from "react";

function FeedbackForm() {

    let [name, setName] = useState("");
    let [feedback, setFeedback] = useState("");
    let [message, setMessage] = useState("");

    let handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`Thank you ${name}, Your feedback is Submitted`);
        setName("");
        setFeedback("");
    }
    return (
        <div>
            <div>

                <h2>Feedback Form</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <br />
                    <br />

                    <textarea
                        type="text"
                        placeholder="Write feedback here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />

                    <br />
                    <br />

                    <button type="submit">Submit</button>

                </form>

                <p>Message: {message}</p>

            </div>
        </div>
    )
}

export default FeedbackForm;

