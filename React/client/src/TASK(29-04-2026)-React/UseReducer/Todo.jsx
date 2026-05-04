import React, { useReducer, useState } from "react";

let initialState = {
    todos: []
};

function reducer(state, action) {
    switch (action.type) {
        case "Add":
            return {
                todos: [...state.todos,
                action.payload
                ]
            };

        case "Remove":
            return {
                todos: state.todos.filter(
                    (todo) => todo !== action.payload
                )
            };

        default:
            return state;
    }
}

function Todo() {

    let [state, dispatch] = useReducer(reducer, initialState);

    let [input, setInput] = useState("");

    let handleAdd = () => {
        setInput("");
        dispatch({ type: "Add", payload: input });
    };

    return (

        <div>

            <h2>UseReducer Tod App</h2>

            <input type="text"
                placeholder="Enter Task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleAdd}>ADD</button>

            {state.todos.length === 0 ?

                <p>No Task</p> :

                state.todos.map((todo) => (
                    <div key={todo.id}>
                        <h3>
                            {todo}
                        </h3>

                        <button onClick={() => dispatch({ type: "Remove", payload: todo })}>Remove</button>
                    </div>
                ))

            }


        </div>
    )
}

export default Todo;


