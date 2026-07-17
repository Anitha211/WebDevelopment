import React, { useCallback, useState } from "react";
import TodoList from "./TodoList";

function Todo() {

    let [todos, setTodos] = useState([
        "Learn React", 
        "Practice Optimization Techniques"
    ]);

    let addTodo = useCallback(() => {
        setTodos((todo) => [...todo, "Completed React"]);
    }, []);

    return (

        <div>

            <h2>Todo List using usecallBack</h2>

            <TodoList todos={todos}
                      addTodo={addTodo}
            />
            
        </div>
    )
}

export default Todo;