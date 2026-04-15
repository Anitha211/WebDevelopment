import React, { useState } from "react";
import axios from "axios";
import "./Axios.css"

function Posts() {

    let [data, setData] = useState([]);
    let [message, setMessage] = useState("");

    // get

    let fetchPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            setData(res.data);
            setMessage("Users fetched successfully");
        })
        .catch((error) => {
            console.log(error);
        })
    }

    // 

    let addPost = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts", {
            title: "New Post Title",
            body: "This is a new post body",
            userId: 1
        })
        .then((res) => {
            setData([...data,res.data]);
            console.log("GetTodos:",res.data);
            setMessage("New Post added successfully")
        })
        .catch((error) => console.log(error));
    }

    // put

    let updatePut = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/1", {
            title: "Updated Full Post",
            body: "This post body is replaced by PUT",
            userId: 1
        })
        .then((res) => {
            setData([res.data])
            console.log("GetTodos:",res.data);
            setMessage("Post Updated successfully using Put")
        })
        .catch((error) => console.log(error));
    }

    // patch

     let updatePatch = () => {
        axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
            title: "Updated title by using Patch",
        })
        .then((res) => {
            setData([res.data])
            console.log("GetTodos:",res.data);
            setMessage("Post Updated successfully using Patch")
        })
        .catch((error) => console.log(error));
    }

    // Delete

     let deletePost = (id) => {
        axios.delete("https://jsonplaceholder.typicode.com/users/${id}")
        .then((res) => {
            console.log("Delete data:",res.data);
            let updateData = data.filter((user) => user.id !== id);
            setData(updateData);
            setMessage("Post is deleted successfully")
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return(
        <div className="container">
            <h1 className="title">Axios</h1>

            <div className="top-buttons">
            <button className="getbtn" onClick={fetchPosts}>GET</button>
            <button className="getbtn" onClick={addPost}>POST</button>
            </div>

            <h3 className="msg"><u>{message}</u></h3>

            <div className="card-container">
                {data.map((post) => ( 
                    <div className="card" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button className="putbtn" onClick={() => updatePut(post.id)}>PUT</button>
                        <button className="patchbtn" onClick={() => updatePatch(post.id)}>PATCH</button>
                        <button className="deletebtn" onClick={() => deletePost(post.id)}>DELETE</button>
                    </div> 
                ))}
            </div>

        </div>
    )
}

export default Posts;