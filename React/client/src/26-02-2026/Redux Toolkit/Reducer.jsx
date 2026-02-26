import { useDispatch, useSelector } from "react-redux";
import { Decrease, Increase } from "./Slice";
import { useState } from "react";
import { addTodo, deleteTodo } from "./TodoSlice";
import { clearUser, updateUser } from "./UserSlice";

function Reducer(){

    let count = useSelector((state) => state.count.value);
    console.log(count);

     let user = useSelector((state)=> state.user.user);
    //  console.log(user);
    

    let todos = useSelector((state) => state.todo.list);
    // console.log(todos);

    let dispatch = useDispatch();

    let [input, setInput] = useState("")

    let handleAdd = () => {
        if(input !== ""){
            dispatch(addTodo(input));
            setInput("")
        }
    };
    
    return(
        <div style={{padding:"20px", maxWidth:"500px"}}>
            <h1>COUNTER & TODO</h1>

            <h2>COUNT: {count}</h2>
            <button onClick={() => dispatch(Increase())}>INCREASE</button>
            <button onClick={() => dispatch(Decrease())}>DECREASE</button>
            <hr/>

            <h1>User Details:</h1>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick ={() => dispatch(updateUser("Updated user details"))}>Update User</button>
                    <button onClick ={() => dispatch(clearUser("Cleared User Details"))}>Clear User</button> 
                <hr/>

            <h1>Todo List</h1>
            
            <input 
                    type="text"
                    placeholder="Enter todo"
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    />
                
            <button style={{marginLeft:"10px"}} onClick={handleAdd}>ADD TODO</button>

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

                <button style={{marginLeft:"10px"}} onClick={() => dispatch(deleteTodo(todo.id))}>DELETE</button>

                    </div>
                  ))
            
            }
        </div>
    )
}
export default Reducer;