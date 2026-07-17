import React from "react";

let C = React.memo(({data, salary, setSalary, bonusSalary}) => {


    console.log("C Component Render");

    return(
        <div>
            <h2>Data Changed: {data}</h2>

            <h3>Salary: {salary}</h3>

            <h3>Bonus Salary : {bonusSalary}</h3>

            <button onClick={() => setSalary(salary +5000)}>Increase Salary</button>
        </div>
    ) 

});

export default C;


