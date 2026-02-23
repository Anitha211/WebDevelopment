import React, { useEffect, useState } from "react";

function A(){
       let[a,seta] = useState([]);
    
       useEffect(()=>{
          console.log(a);
          
       },[a])
      

    useEffect(() => {
         console.log("Hello");
         fetch("https://jsonplaceholder.typicode.com/posts")
         .then((d) =>d.json())
         .then((d) => 
        // console.log(d)
         seta(d)
        )
    }, [])
    // console.log(a[0])
    // console.log(a[0].title);
    

    return(
        <div>
           {a.map ((b)=>{
              return (
                <div key={b.id}>
                    <h1>User Id: {b.userId}</h1>
                    <h1>ID: {b.id}</h1>
                    <h2>Title: {b.title}</h2>
                </div>
              )

           })}

        </div>
    )
}


export default A