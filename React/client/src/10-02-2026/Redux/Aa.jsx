import { useDispatch, useSelector } from "react-redux";


function Aa(){
    let a = useSelector((state)=> {
        return state.quantity
    })
    console.log(a);

    let d = useDispatch()
    
    return(
        <div style={{textAlign: "center", marginTop: "40px"}}>
            <h1>Redux</h1>
           <h1 style={{color:"red"}}>Cart Quantity</h1>
           <h3 style={{color:"blue"}}>Quantity: {a}</h3>
           <button onClick={() => d({type:"Increment",payload: 5})}
           style={{marginLeft:"10px", color:"magenta", backgroundColor:"yellow"}}
            >Increment</button>
        
           <button onClick={() => d({type:"Decrement",payload:1})} 
            style={{marginLeft:"10px", color:"magenta", backgroundColor:"yellow"}}>Decrement</button>
        </div>
    )

}
export default Aa;
