import React, { useReducer, useState } from "react";

let initialState = {
    todos: [],
    nextId: 1
};

function todoReducer(state, action) {
    switch (action.type) {
        case "Add":
            return {
                todos: [
                    ...state.todos,
                    { id: state.nextId, text: action.payload, completed: false }
                ],
                nextId: state.nextId + 1
            };

        case "Delete":
            return {
                ...state,
                todos: state.todos.filter(todo =>
                    todo.id !== action.payload
                )
            };

        default:
            return state;
    }
}

function Todo() {

    let [state, dispatch] = useReducer(todoReducer, initialState);

    let [input, setInput] = useState("");

    let handleAdd = () => {
        input && dispatch({ type: "Add", payload: input });
        setInput("")
    };

    return (
        <div style={{
            display: "flex", justifyContent: "center",
            alignItems: "center", background: "#a7d0f3", borderRadius: "15px", margin: "50px"
        }}>

            <div style={{ padding: "20px", borderRadius: "10px", width: "320px" }}>
                <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Todo App</h2>

                <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
                    <input

                        style={{
                            padding: "8px",
                            background: "#0c0d0e",
                            borderRadius: "12px",
                            color: "white",
                            border: "none"
                        }}
                        type="text"
                        placeholder="Enter Task"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button style={{
                        padding: "8px 12px",
                        background: "#1bcf0b",
                        color: "white",
                        border: "none",
                        fontSize: "16px",
                        cursor: "pointer"
                    }} onMouseMove={handleAdd}>Add</button>
                </div>

                <div>
                    {state.todos.map(todo => (
                        <div key={todo.id} style={{color:"Blue"}}>
                            <h3>{todo.text}</h3>

                            <button style={{
                                background: "#e71919",
                                color: "white",
                                border: "none",
                                fontSize: "16px",
                                cursor: "pointer"
                            }} onClick={() => dispatch({ type: "Delete", payload: todo.id })}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Todo;




