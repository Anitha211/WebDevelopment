import React, { useState } from "react";
import B from "./B"

function A() {

    let name = "John";
    let age = 10;
    let value = 12345;

    let [count, setCount] = useState(0);

    let inc = () => {
        setCount(count+1)
    };
    // console.log(inc);
    

    return(

        <div>
            <h1>WelCome to React Functional Component</h1>

            <p>This is a simple funactional component in react js. </p>

            <h3>Functional Component with props</h3>

            <p>Parent Component (A) - {value}</p>

           

            <B name={name}
               age={age}
               count={count}
               inc={inc}

            />
            
        </div>
    )
}

export default A;