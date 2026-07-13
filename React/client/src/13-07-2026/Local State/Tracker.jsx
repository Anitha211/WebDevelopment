import React, { useReducer } from "react";

let initialState = [

    { id: 1, name: "Anitha", present: false },
    { id: 2, name: "Kumudini", present: false },
    { id: 3, name: "Madhava", present: false }
];

function reducer(state, action) {

    switch (action.type) {
        case "Toggle_ATTENDANCE":
            return state.map((student) =>
                student.id === action.payload ? {
                    ...student,
                    present: !student.present,
                } : student
            );

        default:
            return state;
    }
}

function AttendanceTracker() {

    let [students, dispatch] = useReducer(reducer, initialState);

    return (

        <div>

            <h2>Student Attendance Tracker</h2>

            {students.map((student) => (
                <div key={student.id}>
                    <h3>{student.name}</h3>

                    <p>
                        Status: {student.present ? "Present" : "Absent"}
                    </p>

                    <button onClick={() => dispatch({
                        type: "Toggle_ATTENDANCE",
                        payload: student.id

                    })}>Toggle Attendance</button>
                </div>
            ))}

        </div>
    )
}

export default AttendanceTracker;