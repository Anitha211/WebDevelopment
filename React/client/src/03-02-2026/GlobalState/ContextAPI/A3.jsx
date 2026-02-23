import { useDispatch, useSelector } from "react-redux";

function A3(){
    let user= useSelector((state) => state.user)
    let d = useDispatch()
    // console.log(d);
    console.log(user);
    return(
        
            <div>
                <h1>User Details</h1>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>City: {user.city}</p>
                <button onClick={()=>d({type:"ChangeUser"})}>Click</button>
            </div>
       
    )
}

export default A3;