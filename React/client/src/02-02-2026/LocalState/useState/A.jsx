import React, { useState } from "react"

import BB from "./BB"

function A(){
    let[a,seta] = useState({
        name: "Anitha",
        Id : 9989,
        city : "Kadapa"
    })

    let set = () => { seta({
        name: "Anitha",
        Id : 123,
        city : "Kadapa"
    })
}
    let geta = () => {
        seta({
            ...a,
            city : "Hyderabad",
            email: "anitha@gmail.com",
        })
    }
    return(
        <div>
            <BB a={a}
            set={set}
            geta={geta}/>
        </div>
    )
}

export default A;