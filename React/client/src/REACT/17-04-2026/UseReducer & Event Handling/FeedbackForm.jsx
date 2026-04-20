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
        <div style={{
            display: "flex", 
            justifyContent: "center",
            alignItems: "center",
            background:"skyblue",
            borderRadius:"20px",
            margin:"50px"
        }}>
            <div style={{width:"350px", 
                        padding:"20px",
                        borderRadius:"10px",
                        textAlign:"center"}}>

                <h2 style={{marginBottom:"20px"}}>
                    Feedback Form</h2>

                <form onSubmit={handleSubmit}>
                    <input style={{width:"100%",
                        padding:"10px",
                        marginBottom:"15px",
                        borderRadius:"5px",
                        border:"1px solid #cf8181"
                    }}
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <br />
                    <br />

                    <textarea 
                    style={{width:"100%", 
                     padding:"10px",
                     height:"80px", 
                     marginBottom:"15px",
                     borderRadius:"5px",
                     border:"1px solid #cf8181"
                    }}
                        type="text"
                        placeholder="Write feedback here..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    />

                    <br />
                    <br />

                    <button style={{
                        width:"40%",
                        padding:"10px",
                        background:"#3382d6",
                        color:"white",
                        border:"none",
                        borderRadius:"5px",
                        cursor:"pointer"
                    }} type="submit">Submit</button>

                </form>

                <p style={{marginTop:"15px", color:"green"}}>
                    {message}</p>

            </div>
        </div>
    )
}

export default FeedbackForm;

