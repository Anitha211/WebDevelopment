import React from "react"
import B from "../Parent to child/B"
import C from "../Parent to child/C"

function A(){

    let value = 10;

    function getValue(g){
       console.log(g)
    }
     getValue(1000)
   

    return(
        <div>
            <h1>Parent Component (A) and value is {value}</h1>
            <B a="Hello is from parent A"/>
            <B b={value}/>
            <C b={getValue}/>
           
        </div>
    )
}

export default A
