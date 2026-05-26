import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "./CountSlice";
import { login, logout } from "./AuthSlice";
import { addTodo, deleteTodo } from "./TodoSlice";

function Reducer() {

    let count = useSelector((state) => state.count.value);

    // 

    let { isLogin, user } = useSelector((state) => state.auth);

    let [username, setUsername] = useState("");

    // todo

    let todos = useSelector((state) => state.todo.list);


    let [input, setInput] = useState("")

    let handleAdd = () => {
        if (input !== "") {
            d(addTodo(input));
            setInput("")
        }
    };

    let d = useDispatch();

    return (

        <div>

            <h1>Count:{count}</h1>

            <button onClick={() => d(increase())}>Increase</button>

            <button onClick={() => d(decrease())}>Decrease</button>

            <button onClick={() => d(reset())}>Reset</button>

            <br /> <hr /> <br />

            <h1>Login</h1>

            {!isLogin ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <br /><br />

                    <button onClick={() => d(login(username))}
                    >Login</button>
                </div>

            ) : (

                <div>
                    <h3>Welcome, {user}</h3>
                    <button onClick={() => d(logout())}
                    >Logout</button>
                </div>
            )}

            <br /> <hr /> <br />

            <h2>Todo Lists</h2>

            <input
                type="text"
                placeholder="Enter todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button style={{ marginLeft: "10px" }} onClick={handleAdd}>ADD TODO</button>

            {todos.length == 0 ? <p>No todos</p> :
                todos.map((todo) => (
                    <div key={todo.id}
                        style=
                        {{
                            padding: "10px",
                            border: "2px solid blue",
                            margin: "8px",
                            width: "90%",
                            textAlign: "center",
                            borderRadius: "10px",
                        }}>
                        <p>Text:{todo.text}</p>

                        <button style={{ marginLeft: "10px" }} onClick={() => d(deleteTodo(todo.id))}>DELETE</button>

                    </div>
                ))
            };

        </div>
    )
};

export default Reducer;




