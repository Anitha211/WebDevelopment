import { useContext } from "react";
import { Context } from "./A";


function E(){
let {a} = useContext(Context);
    // console.log("Increase:",a);
    
    return(
        <div>
             <h3>E</h3> 
             <p>Value from A1 Component - {a}</p>
        </div>
    )
}

export default E;