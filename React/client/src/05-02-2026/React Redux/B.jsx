import { useDispatch, useSelector } from "react-redux";
function B() {
    
    let user = useSelector(state => {
        return state.user
    });
    console.log(user);
    
    let dispatch = useDispatch()
    
    console.log(user);
    return (
       
        <div>
            
            <h1>User Details</h1>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
            <button onClick={() => dispatch({ type: "A", 
                payload: { name: "Anitha", email: "anitha@gmail.com" } })}>Update</button>
            <button onClick={() => dispatch({ type: "Clear" })}>Clear</button>
            
        </div>

       
    )
}
export default B;