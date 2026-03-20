import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"

function Get() {

    let [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPost(res.data)
            })
    });

    // 

    let postData = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "new posted title"
        })
            .then((res) => {
                console.log(res.data);
            })
    };
    
    
    return (

        <div>
            <button onClick={postData}>Add Post</button>

            {post.map((post) => (
                <div key={post.id}>
                    <p>{post.id}</p>
                    <h3>{post.title}</h3>
                </div>
            ))}

        </div>

    )
}

export default Get;




