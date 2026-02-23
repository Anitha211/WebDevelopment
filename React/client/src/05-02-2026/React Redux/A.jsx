import {  useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { b } from "./redux1";
import B from "./B";

function A() {
    let number = useSelector(state => {
        return state.number
    });
    let type = useSelector(state => {
        return state.type
    });
    let d = useDispatch()
   
    console.log(number, type);
    
    return (
        <Provider store={b}>
        <div>
            <h1>Even/Odd</h1>
            <h2>Number: {number}</h2>
            <h2>Type: {type}</h2>
            <button onClick={() => d({ type: "Increase" })}>Increase</button>
            <button onClick={() => d({ type: "Decrease" })}>Decrease</button>
            <button onClick={() => d({ type: "Reset" })}>Reset</button>
            <B/>
        </div>
        </Provider>
    )
}
    


export default A;
