import { useDispatch, useSelector } from "react-redux";
import { Decrease, Increase, Reset } from "./Slice"; 
import { clearUser, updateUser } from "./Slice1";
import { Login, Logout } from "./Slice2";

function Reducer(){
    let value = useSelector((state) => {
        return state.Count.value;
    });
    // console.log(value); 
    let action = useSelector((state) => {
        return state.Count.action;
    });
    let d= useDispatch();
    // 
    // 
    let user = useSelector((state)=>{
        return state.user.user;
    });
    // console.log(user);
    let userAction = useSelector((state)=>{
        return state.user.userAction;
    });
    // 
    // 
    let isLogin = useSelector((state) => {
        return state.auth.isLogin;
    });
    // console.log(isLogin);
    let authAction = useSelector((state) => {
        return state.auth.authAction;
    });
    // 
    return(
        <div>
            <h1>Inc & Dec the value:- {value}</h1>
            <h2>Payload Action: {action}</h2>
            <button onClick={() => d(Increase("Increase Value"))}>Increase</button>
            <button onClick={() => d(Decrease("Decrease Value"))}>Decrease</button>
            <button onClick ={() => d(Reset("Reset Value"))}>Reset</button>

            {/*  */}
            <hr></hr>

            <h1>User Details:</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <p>State: {user.state}</p>
            <p>Country: {user.country}</p>
            <h2>User Action: {userAction}</h2>
            <button onClick ={() => d(updateUser("Updated user details"))}>Update User</button>
            <button onClick ={() => d(clearUser("Cleared User Details"))}>Clear User</button> 
            
            {/*  */}
            <hr></hr>

            <h1>Login Status : {isLogin}</h1>
            <h2>Auth Action: {authAction}</h2>
            <button onClick ={() => d(Login("true"))}>Login</button>
            <button onClick={() => d(Logout("false"))}>Logout</button>

        </div>
   )
}
export default Reducer;