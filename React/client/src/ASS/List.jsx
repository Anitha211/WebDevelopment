import React from "react";
import { useState } from "react";

function List(){

    let [fruits] = useState([
        {id:1, item:"Apple"},
        {id:1, item:"Mango"},
        {id:1, item:"Banana"},
        {id:1, item:"Orange"}
    ])

    return(

        <div>
           
            
             {fruits.map((list) => (
                <div key={list.id}>
                    <h1>{list.item}</h1>
                </div>
             )) }
        </div>
    )
}

export default List;