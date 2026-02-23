import React, { useReducer } from "react"

let initialState = {count:0}

function countReducer(state,action){
    switch (action.type) {
        case "Increase":
            return {
                count: state.count + action.payload
            }
            case "Decrease":
                return{
                count: state.count > 0 ? state.count - action.payload : 0 
                }
                case "Reset":
                    return {
                        count: 0
                    }
                    default:
                        return state;
    }

}


function A(){
    let [a,dispatch]= useReducer(countReducer,initialState);
    console.log(a);
    
    
    
    return(
        
        <div style={{width:"250px",margin:"50px",padding:"20px",textAlign:"center",backgroundColor:"lightgray",border:"2px solid black",fontFamily:"monospace"}}>
            <h1 >useReducer</h1>
            <h3>COUNT : {a.count}</h3>
            
            <button onClick={()=>{dispatch({type:"Increase", payload: 5})}} style={{margin:"5px"}}>Increase</button>
             
            <button onClick={()=>{dispatch({type:"Decrease", payload: 5})}} style={{margin:"5px"}}>Decrease</button>
            <br></br>
            <br></br>
            <button onClick={()=>{dispatch({type:"Reset"})}} style={{margin:"5px"}}>Reset</button>
            
        </div>
    )
}


export default A;