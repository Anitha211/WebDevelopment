import React, {useState} from "react";
import axios from "axios"

function Patch(){
    let[post, setPost] = useState([]);
    let[message, setMessage] = useState("");

    let updatePatch = () => {
        axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
            title: "Updated title by using Patch",
        })
        .then((res) => {
            setPost([res.data])
            console.log("GetTodos:",res.data);
            setMessage("Post Updated successfully using Patch")
        })
        .catch((error) => console.log(error));
    }
    return(
        <div>
            <h3>Patch Data</h3>

            <button style={{border:"1px solid black", margin:"10px", padding:"10px",textAlign:"center"}}  onClick={updatePatch}>Patch Data</button>

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
export default Patch;