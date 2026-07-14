import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./TodoSlice";

function Todo() {

    let [task, setTask] = useState("");

    let todos = useSelector((state) => 
    state.todo.todos);

    let dispatch = useDispatch();

    return(

        <div>

            <h2>Todo List</h2>

            <input type="text" 
                   value={task}
                   placeholder="Enter Task"
                   onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={() => {
                dispatch(addTodo(task));
                setTask("");
            }}> ADD </button>

            <ul>
                {todos.map((item, i) => (
                    <li key={i}>
                        {item}

                        <button onClick={() => 
                            dispatch(removeTodo(i))
                        }>DELETE</button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Todo;