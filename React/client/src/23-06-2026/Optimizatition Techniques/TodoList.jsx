import React from "react";

let TodoList = React.memo(() => {

    console.log("Todo Rendered");
    
    return (

        <div>
            <ul>
                <li>Learn React</li>
                <li>Learn Redux</li>
                <li>Practice React & Redux</li>
            </ul>
        </div>
    )
})
export default TodoList;


