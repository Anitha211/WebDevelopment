import { store } from "../Redux/BBB";
import A3 from "./A3"
import { Provider } from "react-redux"
import {useDispatch, useSelector } from "react-redux";


function A2(){
    let data= useSelector((state) => {
        return state
    })
    let d = useDispatch()
    // console.log(d);
    console.log(data);
    return(
            <Provider store={store}>
            <div>
                <h1>Redux</h1>
                <p>Data: {data.sum}</p>
                <button onClick={()=>d({type:"Increase"})}>Increase</button>

                <button onClick={()=>d({type:"Decrease"})}>Decrease</button>

                <p>Text: {data.text}</p>
                <button onClick={()=>d({type:"ChangeText"})}>Change Text</button>
                <A3/>
            </div>
            </Provider>
       
    )
}

export default A2;