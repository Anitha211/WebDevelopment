import React from "react";

let TodoList = React.memo(({todos, addTodo}) => {

    console.log("TodoList Components Rendering");

    return (

        <div>

            <h3>Todo List</h3>

            <button onClick={addTodo}>Add Todo</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                    </li>
                ))}
            </ul>

        </div>
    )
})

export default TodoList;