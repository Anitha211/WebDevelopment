import React, { useState } from "react";

function Checker() {

    // Age Checker //

    let [age, setAge] = useState("");
    let [category, setCategory] = useState("");

    let handleAgeCheck = () => {
        let numAge = Number(age);

        if (numAge < 18) {
            setCategory("Child");
        } else if (numAge >= 18 && numAge <= 60) {
            setCategory("Adult")
        } else if (numAge > 60) {
            setCategory("Senior")
        } else {
            setCategory("")
        };

    };

    // Grade Checker //

    let [marks, setMarks] = useState("");
    let [grade, setGrade] = useState("");

    let handleGrade = () => {
        let numMarks = Number(marks);
        
        if(numMarks >= 90){
            setGrade("Grade A")
        }else if (numMarks >= 70) {
            setGrade("Grade B")
        }else if (numMarks >= 50) {
            setGrade("Grade C")
        }else {
            setGrade("Fail")
        };
    };


    return (

        <div>

        <div>
            <h2>Age Checker</h2>

            <input type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <br /><br />

            <p>Entered Age: {age}</p>

            <button onClick={handleAgeCheck}>Check</button>

            <br /><br />

            <h3>{category}</h3>

            <p>{age ? Number(age) >= 18 ? "Access Allowed" : "Access Denide" : ""}</p>

            {Number(age) >= 18 && <p>Eligible to vote</p>}

        </div>

        <hr/>

        <div>
            <h2>Grade Checker</h2>

            <input type="number"
                    placeholder="Enter score"
                    value={marks}
                    onChange={(e) => setMarks(e.target.value)}
            />

            <br/><br/>

            <p>Entered Marks: {marks}</p>

            <button onClick={handleGrade}>Check Grade</button>

            <h3>Grade: {grade}</h3>
        </div>

        </div>

        
    )
}

export default Checker;