import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "./Slice"
import userReducer  from "./Slice1";
import authReducer from "./Slice2";


let store = configureStore({
   reducer:{ 
    Count : CounterReducer,
    user : userReducer,
    auth : authReducer,
}

 })

export default store;