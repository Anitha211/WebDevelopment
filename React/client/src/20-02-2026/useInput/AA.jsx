import React from "react";
import useInput from "./useInput";


function C() {
    let {value, handleChange, reset, a} = useInput();

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        reset();
    }
    return(
        <div style={{textAlign:"center",backgroundColor:"white",height:"350px", alignContent:"center",marginLeft:"250px",
                 marginRight:"250px",border:"1px solid black",borderRadius:"15px"}}>

            <h1 style={{color:"blue"}}>UseInput</h1>

            <h3 style={{fontSize:"18px",fontWeight:"bolder",color:"red"}}> Length of a: {a} </h3>

            <h3 style={{ color:"Green"}}> Data: {value} </h3>

            <form style={{marginTop:"20px"}} onSubmit={handleSubmit}> 

                <input type="text"
                       placeholder="Enter Name"
                        value={value}
                        onChange={handleChange}/>
                        <br/>
                        <br/>
                    <button className="btn1" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default C;