import { useDispatch, useSelector } from "react-redux";
import { Decrease, Increase, Reset } from "./Slice"; 



function Reducer(){
    let value = useSelector((state) => {
        return state.Count.value;
    });
    console.log(value);

    let d= useDispatch();
    // 
    // 
   
    return(
        <div>

            <h1>Inc & Dec the value:- {value}</h1>
            <button onClick={() => d(Increase("Increase Value"))}>Increase</button>
            <button onClick={() => d(Decrease("Decrease Value"))}>Decrease</button>
            <button onClick ={() => d(Reset("Reset Value"))}>Reset</button>
            
        </div>

    )
}

export default Reducer;