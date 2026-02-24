import React, { useState } from "react";
import axios from "axios";
import "./API.css";

function API(){
       let[post,setPost] = useState([]);
       let[message, setMessage] = useState("")

       let fetchPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then((res) => {
            setPost(res.data);
            console.log("GET:",res.data);
            setMessage("Fetched successfully")
        })
        .catch((error) => {
            console.log(error);
        })
    };

    // Post

     let addPost = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "New Post Title",
            body: "This is a new post body",
            userId: 1
        })
        .then((res) => {
            setPost([res.data]);
            console.log("POST:",res.data);
            setMessage("New Post added successfully")
        })
        .catch((error) => console.log(error));
    }

    // Put

    let updatePut = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/1", {
            title: "Updated Full Post",
            body: "This post body is replaced by PUT",
            userId: 1
        })
        .then((res) => {
            setPost([res.data])
            console.log("PUT:",res.data);
            setMessage("Post Updated successfully using Put")
        })
        .catch((error) => console.log(error));
    }

    // Patch

     let updatePatch = () => {
        axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
            title: "Updated title by using Patch",
        })
        .then((res) => {
            setPost([res.data])
            console.log("PATCH:",res.data);
            setMessage("Post Updated successfully using Patch")
        })
        .catch((error) => console.log(error));
    }

    // Delete

    let deletePost = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
            setPost([])
            console.log("DELETE:",res.data);
            setMessage("successfully Deleted")
        })
        .catch((error) => console.log(error));
        
    }
    
    return(

        <div className="Container">

            <h1>API METHODS</h1>
               
            <button className="button" onClick={fetchPosts}> GET </button>
            <button className="button" onClick={addPost}> POST </button>
            <button className="button" onClick={updatePut}> PUT </button>
            <button className="button" onClick={updatePatch}> PATCH </button>
            <button className="button" onClick={deletePost}> DELETE </button>
            
            <h2><u>{message}</u></h2>
            
             <div className="Card-Container">
            {post.map((post) => {
                return (
                    <div key={post.id} className="CARD">
                        <p>ID: {post.id}</p>
                        <p>User ID: {post.userId}</p>
                        <p>Tile: {post.title}</p>
                        <p>Body: {post.body}</p>
                    </div>
                )
            })
            }
            </div>

        </div>
    )
}
export default API;