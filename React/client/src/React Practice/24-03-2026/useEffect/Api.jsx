import React, { useEffect, useState } from "react";

function Api() {

    let[data,setData] = useState([]);
    let[showPost,setPost] = useState(false);

    useEffect(() => {
        console.log(data);
        
    },[data]);

     useEffect(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((result) => setData(result))
       }, []);

    return(
    <div style={{border: "3px solid gray", padding:"10px",borderRadius:"20px",
                   background:"lightgray",textAlign:"center",margin:"80px"
    }}>

            <h2 style={{textAlign:"center", color:"Red",fontSize:"50px"}}>
                Posts</h2>

             <button onClick={()=> setPost(!showPost)} style={{padding:"8px 16px",background:"whitesmoke",
                color:"navy",fontSize:"14px",margin:"5px",cursor:"pointer",borderRadius:"8px"
             }}>
                {showPost ? "Hide Posts" : "Get Posts"}
            </button>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr",gap:"2px"}}>

            {showPost && data.map(item => (
                <div key={item.id} 
                style= {{  border:"1px solid black",
                    borderRadius:"10px",
                    margin:"10px", 
                    padding:"10px",
                    width:"85%",
                    textAlign:"center",
                    alignContent:"center",
                    background:"lightblue"
                }}>
                    <h3 style={{color:"blue"}}><u>{item.id}</u></h3>
                    <h3 style={{color:"white"}}>{item.title}</h3>
                    <h3>{item.body}</h3>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Api;