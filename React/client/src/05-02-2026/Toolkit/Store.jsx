import {configureStore} from "@reduxjs/toolkit"
import CounterReducer from "./Slice"

let store = configureStore({
   reducer:{ 
    Count : CounterReducer
   }
 })

export default store;