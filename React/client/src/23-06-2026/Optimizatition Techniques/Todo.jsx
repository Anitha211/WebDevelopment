import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {

    let [notification, setNotification] = useState(0);

    return(

        <div>

            <h1>Notifications: {notification}</h1>

            <button onClick={() => setNotification(notification + 1)}> New Notificaion</button>

            <TodoList/>

        </div>
    )
}

export default Todo;


