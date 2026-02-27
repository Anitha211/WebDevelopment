import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Redux() {

    let user = useSelector(state => {
        return state.user
    });
    let dispatch = useDispatch();

    let [name,setName] = useState("");
    let[email,setEmail] = useState("");

    let addUser = () => {
        dispatch({
            type:"AddUser",
            payload:{name,email}
        })
    };

    let clearUser = () => {
        dispatch({
            type: "ClearUser"
        })
    };
    
return (
       
    <div style={{textAlign:"center",marginTop:"50px"}}>
            
        <h1>User Form</h1>

        <h3>Stored Data</h3>
        <p><b>Name:</b> {user.name}</p>
        <p><b>Email:</b> {user.email}</p>
        
            <input
                 type="text"
                 placeholder="Enter Name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 style={{padding:"8px",borderRadius:"5px",marginRight:"5px",
                            border:"1px solid #ccc"}}/>

             <br/><br/>

            <input
                 type="email"
                 placeholder="Enter Email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                style={{padding:"8px",borderRadius:"5px",marginRight:"5px",
                            border:"1px solid #ccc"}}/>

            <br/> <br/>
           
            <button onClick={addUser}  
                style={{padding:"8px 15px",margin:"5px",
                    backgroundColor:"green",color:"white",
                    borderRadius:"5px"}}>Update</button>

            <button onClick={clearUser}
                    style={{padding:"8px 15px",margin:"5px",
                          backgroundColor:"red",color:"white",
                          borderRadius:"5px"}}>Clear</button>
    </div>
    )
}
export default Redux;