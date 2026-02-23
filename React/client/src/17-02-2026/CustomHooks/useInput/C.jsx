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
        <div>
            <h1>UseInput</h1>
            <p>Length of a: {a}</p>
            <p>{value}</p>

            <form onSubmit={handleSubmit}> 

                <input type="text"
                       placeholder="Enter Name"
                        value={value}
                        onChange={handleChange}/>
                    <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default C;