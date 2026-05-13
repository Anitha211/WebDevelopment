import React, { useState } from "react";

function B() {

    let [marks, setMarks] = useState("");
    let [grade, setGrade] = useState("");

    let handleGrade = () => {
        let numMarks = Number(marks);

        if (numMarks >= 90) {
            setGrade("Grade A")
        } else if (numMarks >= 70) {
            setGrade("Grade B")
        } else if (numMarks >= 50) {
            setGrade("Grade C")
        } else {
            setGrade("Fail")
        };
    };

    return (

        <div>
            <h2>Grade Checker</h2>

            <input type="number"
                placeholder="Enter score"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
            />

            <br /><br />

            <p>Entered Marks: {marks}</p>

            <button onClick={handleGrade}>Check Grade</button>

            <h3>Grade: {grade}</h3>
        </div>

    )
}

export default B;




