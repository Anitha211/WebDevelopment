import { useState } from "react"
import B from "./Child1"
import C from "./Child2"

function A(){

    let [text,seta] = useState();

    let getA = () => {
        seta("Message from B Component")
    }
    // 
    // 
    let[a,setA] = useState({
            name: "Anitha",
            Id : 9989,
            city : "Kadapa"
        })
    
        let set = () => { setA({
            name: "Anitha",
            Id : 123,
            city : "Kadapa"
        })
    }
        let geta = () => {
            setA({
                ...a,
                city : "Hyderabad",
                email: "anitha@gmail.com",
            })
        }
    
    return(
        <div style={{textAlign:"center"}}>

              <h1>Parent Component</h1>
              <B getA={getA}
                 geta={geta}
                 set={set}/>
                 
              <C text={text}
                 a={a}/>
              
        </div>
    )
}

export default A;