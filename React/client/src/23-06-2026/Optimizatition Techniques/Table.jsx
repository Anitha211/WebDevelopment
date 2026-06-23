import React, { useCallback, useMemo, useState } from "react";
import TableData from "./TableData";

let employees = [
    { id: 1, name: "John", department: "IT" },
    { id: 2, name: "Sara", department: "HR" },
    { id: 3, name: "David", department: "Finance" },
    { id: 4, name: "Priya", department: "IT" },
    { id: 5, name: "Ravi", department: "HR" }
];


function Table() {

    let [search, setSearch] = useState("");
    // let [count, setCount] = useState(0);

    // let employees = [
    //     {id: 1, name:"John", department:"IT"},
    //     {id:2, name:"Sara", department:"HR"},
    //     {id:3, name:"David", department: "Finance"},
    //     {id:4, name:"Priya", department:"IT"},
    //     {id:5, name:"Ravi", department:"HR"}
    // ];

    let filteredEmployees = useMemo(() => {
        console.log("Filtering Employees...");

        return employees.filter((emp) =>
            emp.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    let handleDelete = useCallback((id) => {
        console.log(`Employee ID: ${id}`);

    }, []);

    return (

        <div style={{ alignItems: "center" }}>

            <h2>Employee Data Table</h2>

            <input type="text" placeholder="Search Employee"
                value={search} onChange={(e) => setSearch(e.target.value)} />

            <br /><br />

            <table border="1" cellPadding='10'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredEmployees.map((emp) => (
                        <TableData key={emp.id}
                            employee={emp}
                            onDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Table;


