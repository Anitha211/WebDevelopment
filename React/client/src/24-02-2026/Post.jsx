import React, { useState } from "react"
import axios from "axios"

function Post() {

    let[post, setPost] = useState([]);
    let[message, setMessage] = useState("");

    let addPost = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "New Post Title",
            body: "This is a new post body",
            userId: 1
        })
        .then((res) => {
            setPost([...post,res.data]);
            console.log("GetTodos:",res.data);
            setMessage("New Post added successfully")
        })
        .catch((error) => console.log(error));
    }

    return(
        <div>
            <h3>Post Data</h3>

            <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}}  onClick={addPost}>Post Data</button>

            <h3><u>{message}</u></h3>

            <div>
                {post.map((post) => (
                    <div key={post.id}  style=
                {{  border:"1px solid black",
                    margin:"10px", 
                    padding:"10px",
                    width:"900px",
                    textAlign:"center",
                    alignContent:"center"
                }}>
                        <h3>ID : {post.id}</h3>
                        <h3>User Id: {post.userId}</h3>
                        <h3>Title: {post.title}</h3>
                        <h3>Body: {post.body}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Post;