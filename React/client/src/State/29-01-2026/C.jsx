import React from "react"

function C({A,setVal, num, IncreaseNum}){
    console.log("Change Text:",A);
    console.log("NUMBER:", num);
    
    
    
    return(
        <div>
            <h1>Child Component B</h1>
            <p>{A}</p>
            <button onClick={setVal}>Change Text</button>
            
            <h1>Even and Odd Checker</h1>
            <p><b><u>Number</u>:</b> {num}</p>
            <p><b><u>Even or Odd </u> :</b>  {num % 2 == 0 ? "Even" : "Odd" }</p>
             
            <button onClick={IncreaseNum}><b>Update Number</b></button>

            
        </div>
    )
}
export default C;