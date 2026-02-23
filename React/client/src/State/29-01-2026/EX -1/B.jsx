import React from "react"

function B({num, user}){
    let{name, city, id} = user;
    console.log(num);
    console.log(user);
    
    
    return(
        <div>
         <h3>Child Component-B</h3>
         <p>Number: {num}</p>
         <p>Name: {name}</p>
         <p>City: {city}</p>
         <p>id: {id}</p>
        </div>
    )
}

export default B;