import { useDispatch, useSelector } from "react-redux";
import { turnOff, turnOn } from "./Slice";
import { deposit, withdraw } from "./Slice1";
import { Text1, Text2 } from "./Slice2";

function Reducer(){
    let isOn = useSelector((state) => {
        return state.bulb.isOn;
    });
    // console.log(isOn);
    let Action = useSelector((state) => {
        return state.bulb.action;
    });

    let d = useDispatch();
    // 
    // 
    let value = useSelector((state)=>{
        return state.number.amount;
    });
    let A = useSelector((state)=>{
        return state.number.action;
    });

    // 
    // 

    let list = useSelector((state) => {
        return state.todo.list
    })
    // console.log(list);
    
    return(
    <div>
        
        <h2>Is On: {isOn}</h2>
        <h2>Action: {Action}</h2>
        <button onClick={() => d(turnOn("Bulb is ON"))}>Turn On</button>
        <button onClick={() => d(turnOff("Bulb is OFF"))}>Turn Off</button>

        <hr></hr>
        <h1>Amount: {value}</h1>
        <h2>Action: {A}</h2>
        <button onClick ={() => d(deposit("Deposit Amount - 100"))}>Deposit</button>
        <button onClick ={() => d(withdraw("Withdraw Amount - 10"))}>Withdraw</button>
        <hr></hr>

        <h1>Todo List:{list} </h1>
        
        <button onClick={() => d(Text1("Learn Redux Toolkit"))}>Text Todo</button>
        <button onClick={() => d(Text2("Learn React"))}>Text Todo</button>

    </div>
 )
}

export default Reducer;