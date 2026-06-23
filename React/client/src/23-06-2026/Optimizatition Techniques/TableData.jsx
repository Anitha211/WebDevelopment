import React from "react";

let TableData = React.memo(({ employee, onDelete }) => {

    console.log(employee.name, "Rendered");

    return (

        <tr>

            <td>{employee.id}</td>

            <td>{employee.name}</td>

            <td>{employee.department}</td>

            <td><button onClick={() => onDelete(employee.id)}>Delete</button></td>
            
        </tr>

    )

});

export default TableData;


