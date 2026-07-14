import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Redux1() {

    let employee = useSelector((state) => 
            state.employee
        );

    let dispatch = useDispatch();
    

    return(

        <div>

            <h2>Employee: {employee}</h2>

            <button onClick={() => dispatch({type: "ADD_EMPLOYEE"})}>ADD</button>

            <button onClick={() => dispatch({type: "REMOVE_EMPLOYEE"})}>Remove</button>



        </div>
    )

}

export default Redux1;