import React, { useState } from "react";
import axios from "axios"

function Get(){
       let[post,setPost] = useState([]);
       let[message, setMessage] = useState("")

       let fetchPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => {
            setPost(res.data);
            console.log("GetTodos:",res.data);
            setMessage("Fetched successfully")
        })
        .catch((error) => {
            console.log(error);
        })
    };

    
    return(

        <div>
            
        <h3>Get Data</h3>

        <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}}  onClick={fetchPosts}>Get Data</button>
           
        <h3><u>{message}</u></h3>
            
             <div>
            {post.map((post) => {
                return (
                    <div key={post.id}  style=
                {{  border:"1px solid black",
                    margin:"10px", 
                    padding:"10px",
                    width:"900px",
                    textAlign:"center",
                    alignContent:"center"
                }} >
                        <h3>ID: {post.id}</h3>
                        <h3>User ID: {post.userId}</h3>
                        <h3>Tile: {post.title}</h3>
                        <h3>Body: {post.body}</h3>
                    </div>
                )
            })
            }

            </div>
        </div>
    )
}
export default Get;