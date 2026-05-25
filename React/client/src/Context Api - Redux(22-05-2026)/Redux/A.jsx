import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function A() {

    let [step, setStep] = useState(1);

    let count = useSelector((state) => state.count);

    let Dispatch = useDispatch();

    // todos

    let [text, setText] = useState("");

    let todos = useSelector(
        (state) => state.todos
    );

    let addTodo = () => {
        if (text.trim() === "") {
            return;
        }

        Dispatch({
            type: "ADD_TODO", payload: text
        });

        setText("")
    };

    return (

        <div style={{ textAlign: "center", marginTop: "5px" }}>

            <h1>Counter</h1>

            <h2>Counter 1: {count}</h2>

            <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} />

            <br></br>
            <br></br>

            <button onClick={() => Dispatch({ type: "INCREMENT", payload: step })}>INCREMENT</button>

            <button onClick={() => Dispatch({ type: "DECREMENT" })} style={{ marginLeft: "10px" }}>DECREMENT</button>

            <button onClick={() => Dispatch({ type: "RESET" })} style={{ marginLeft: "10px" }}>RESET</button>

            <br></br>
            <br></br>

            {/* Increase by 5 and Decrement by 10 */}

            <button onClick={() => Dispatch({ type: "INCREMENT_BY_5" })}> +5 </button>

            <button onClick={() => Dispatch({ type: "DECREMENT_BY_10" })} style={{ marginLeft: "10px" }}> -10 </button>

            <hr />
            {/* todo app */}

            <h2>Todo App</h2>

            <input type="text" placeholder="Enter Todo"
                value={text} onChange={(e) => setText(e.target.value)}
            />

            <button onClick={addTodo} style={{ marginLeft: "10px" }}>ADD</button>

            <br></br>

            {todos.map((todo, i) => (
                <div key={i} style={{ marginTop: "10px" }}>

                    <span>{todo}</span>

                    <button onClick={() => Dispatch({ type: "DELETE_TODO", payload: i })}
                        style={{ marginLeft: "10px" }}
                    >DELETE</button>
                </div>
            ))}


        </div>
    )
}

export default A; 