import { useState } from "react";
import C from "./C";

function P(){
    
    let [A,setA] = useState("Hello");
    
    function setVal(){
        setA("Hello, Welcome");
    }
    //  
    // 
    let[num, setNum] = useState(0);
    
    function IncreaseNum(){
        setNum(num+1); 
    }
    return(
        <div>
            <h1>Parent Component A</h1>

            <C A={A}
               setVal={setVal}

               num={num}
               IncreaseNum={IncreaseNum}/>
        </div>
    )
}
export default P;