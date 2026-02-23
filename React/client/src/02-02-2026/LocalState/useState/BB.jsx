// import React from "react";

function BB({a, set, geta}){
    console.log(a);
    
return(
        <div>
            
            <p>Name: {a.name}</p>
            <p>ID: {a.Id}</p>
            <p>City: {a.city}</p>
            <p>Email: {a.email}</p>
            <button onClick={set}>Click</button>
            <button onClick={geta}>Click</button>

            
        </div>
    )
}

export default BB;