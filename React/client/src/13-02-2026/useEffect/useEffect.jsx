import React, { useEffect, useState } from "react";
import "./style.css"

function B(){

    let[a,seta] = useState([]);
    let[showPost,setPost] = useState(false)

      useEffect(()=>{
                console.log(a);
                
             },[a])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((d) => seta(d))
    },[])


    // console.log(a[1].title);
    
    return(

         <div className="a">

            <h1 className="title">Posts List</h1>

            <button onClick={()=> setPost(!showPost)}  className="btn">
                {showPost ? "Hide Posts" : "Get Posts"}
            </button>
            
            <div className="b">
            {showPost && a.map((post)=> {
                return (
                    <div key={post.id} className="c">

                        <h1 className="p1">User Id: {post.userId}</h1>
                        <h1 className="p2">ID: {post.id}</h1>
                        <h2 className="p3">Title: {post.title}</h2> 
                        </div>
                    
                )
            })}
            </div>

        </div>
    )
}

export default B;