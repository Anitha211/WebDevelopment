import React, {useState} from "react";
import axios from "axios";

function Put(){
    let[post, setPost] = useState([]);
    let[message, setMessage] = useState("");

    let updatePut = () => {
        axios.put("https://jsonplaceholder.typicode.com/posts/1", {
            title: "Updated Full Post",
            body: "This post body is replaced by PUT",
            userId: 1
        })
        .then((res) => {
            setPost([res.data])
            console.log("GetTodos:",res.data);
            setMessage("Post Updated successfully using Put")
        })
        .catch((error) => console.log(error));
    }
    return(
        <div style={{alignItems:"center"}}>

            <h3>Put Data</h3>

            <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}}  onClick={updatePut}>Put Data</button>

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
                    <h3>User Id: {post.userId}</h3>
                    <h3>Title: {post.title}</h3>
                    <h3>Body: {post.body}</h3>
            </div>
            ))}

        </div>

    </div>
    )
}

export default Put;