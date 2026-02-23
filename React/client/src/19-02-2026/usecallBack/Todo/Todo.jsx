import React, { useState, useCallback } from "react";

export let TodoItem = React.memo(({id,text,deleteTodo}) => {
    console.log( "Child Todo:",text);

    return(
        <div className="Card">
            <p>ID: {id}</p>
            <p>Text: {text}</p>
            <button  className="btn1" onClick={() => deleteTodo(id)}>DELETE</button>
        </div>
    )
});

function Todo(){
     
    let [todo, setTodo] = useState([
        { id:1, text:"React.memo"},
        { id:2, text:"UsecallBack"}
    ]);

    
        let deleteTodo = useCallback((id)=>{
            console.log("Deleting:",id)
            setTodo(prev=>prev.filter(todo => todo.id !== id))
        },[]);

    console.log("Parent Todo");
    
return(
    <div className="Container">

            <h1 className="title">Todo List</h1>
            
        <div className="grid">

            {todo.map((todo) => (
                < TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    deleteTodo = {deleteTodo}
                />
            ))}

        </div>

    </div>
    
    )
}  

export default Todo;